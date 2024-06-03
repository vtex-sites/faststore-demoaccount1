import React from "react";
import { Button } from '@faststore/ui';

export interface RoomIdeaProps {
  data: [Item],
  callToActionBtn: {
    text: string
    newWindow: boolean
  }
}

type Item = {
  url: string
  image: string
  name: string
}

function RoomIdea({
  data
}: RoomIdeaProps) {
  
  return (
    <div data-fs-room-ideas-grid>
      {data && data.map((gridItem: any, index: number) => (
          <a key={index} href={`/shop-by-room${gridItem.url}`} target="_blank" data-fs-room-ideas-grid-item>
              <img data-fs-grid-item-img data-fs-grid-idea={gridItem.button ? true : false} src={gridItem.image} alt={gridItem.name} />
              {gridItem.button && <Button data-fs-grid-item-btn>{gridItem.button}</Button>}
              <div data-fs-grid-item-title>{gridItem.name}</div>
          </a>
      ))}
    </div>
  );
}

export default RoomIdea;
