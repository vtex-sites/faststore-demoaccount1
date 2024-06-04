import React, { useState, useEffect } from "react";
import { useQuery } from 'src/sdk/graphql/useQuery';
import { GetRoomScenes } from "../../../../fragments/GetRoomScenes";
import { Button } from '@faststore/ui';
import GoBackButton from "./GoBackButton/GoBackButton";
import RoomScene from "./RoomScene/RoomScene";
export interface RoomIdeaProps {
  data: [Item]
  callToActionBtn: {
    text: string
    newWindow: boolean
  }
  param?: string
  returnBtn: {
    text: string
    url: string
    newWindow: boolean
  }
  selectedScene?: any
  setSelectedScene: (value: any) => void
}

type Item = {
  url: string
  image: string
  alt: string
  name: string
}

function RoomIdea({
  data,
  callToActionBtn,
  param,
  returnBtn,
  selectedScene,
  setSelectedScene
}: RoomIdeaProps) {

  const [sceneData, setSceneData] = useState<any>('');
  const [sceneList, setSceneList] = useState<any>('');
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.href);
    }
  }, []);

  const getFirstWord = (input: string) => {
    if (!input) return '';
    const words = input.trim().split(' ');
    return words[0].toLowerCase();
  }

  const params = {
    roomId: param ? getFirstWord(param) : ''
  }

  const GetRoomScenesInfo: any = useQuery(
    GetRoomScenes,
    params
  )

  useEffect(() => {
    if (!GetRoomScenesInfo) {
      return
    }

    setSceneData(GetRoomScenesInfo?.data?.GetRoomScenes)
  }, [GetRoomScenesInfo]);

  useEffect(() => {
    if (!sceneData) {
      return
    }

    setSceneList(sceneData)
  }, [sceneData]);

  useEffect(() => {
    if (!path || !path.includes('?scene')) {
      return;
    }
  
    const sceneParamIndex = path.indexOf('?scene=');
    if (sceneParamIndex === -1) {
      return;
    }

    if (!Array.isArray(sceneData)) {
      return;
    }
  
    const sceneParam = path.substring(sceneParamIndex + 7);
    const selectedScene = sceneData.filter((scene: any) => scene.url.includes(sceneParam));
    setSelectedScene(selectedScene[0]);
  }, [path, sceneData]);

  const buildSceneUrl = (path: string, sceneUrl: string) => {
    const url = new URL(path || '', window.location.origin);
    url.searchParams.set('scene', sceneUrl);
    return url.toString();
  }

  const newUrl = data ? data.filter((item: any) => item.name === param)[0]?.url : '';
  
  return (
    <div data-fs-room-ideas-grid>
      {selectedScene ? (
        <>
          <RoomScene image={selectedScene.image} collectionId={selectedScene.collectionId} alt={selectedScene.alt}/>
          <GoBackButton returnBtn={returnBtn} param={param} url={`/shop-by-room${newUrl}`}/>
        </>
      ) : (
        param ? (
          <div data-fs-room-ideas-grid-container>
            <div data-fs-room-ideas-grid-items>
              {sceneList && sceneList.map((sceneItem: any, index: number) => (
                <a key={index} href={buildSceneUrl(path || '', sceneItem.url)} data-fs-room-ideas-grid-item>
                  <img data-fs-grid-item-img data-fs-grid-scene data-fs-grid-idea='true' src={sceneItem.image} alt={sceneItem.alt} />
                  <Button data-fs-grid-item-btn>{callToActionBtn.text}</Button>
                </a>
              ))}
            </div>
            <GoBackButton returnBtn={returnBtn} param={'Room'}/>
          </div>
        ) : (
          <div data-fs-room-ideas-grid-items>
            {data && data.map((gridItem: any, index: number) => (
              <a key={index} href={`/shop-by-room${gridItem.url}`} data-fs-room-ideas-grid-item>
                  <img data-fs-grid-item-img data-fs-grid-idea={gridItem.button ? true : false} src={gridItem.image} alt={gridItem.alt} />
                  <div data-fs-grid-item-title>{gridItem.name}</div>
              </a>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default RoomIdea;
