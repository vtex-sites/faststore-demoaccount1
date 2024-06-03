import React, { useState, useEffect } from "react";
import styles from "../RoomIdeas/RoomIdeas.module.scss";
import { useQuery } from 'src/sdk/graphql/useQuery';
import { GetRoomIdeas } from "../../../fragments/GetRoomIdeas";
import Navigation from "../RoomIdeas/Navigation/Navigation";
import RoomIdea from "../RoomIdeas/RoomIdea/RoomIdea";
import GoBackButton from "../RoomIdeas/GoBackButton/GoBackButton";

function RoomScenes() {

  const returnBtn = {
    text: "Go Back",
    url: "/",
    newWindow: false
  }
  
  const [data, setData] = useState<any>('');
  const [param, setParam] = useState<any>(null);

  const params = {
    id: "1212"
  }

  const GetRoomIdeasInfo: any = useQuery(
    GetRoomIdeas,
    params
  )

  useEffect(() => {
    if (!GetRoomIdeasInfo) {
      return
    }

    setData(GetRoomIdeasInfo?.data?.GetRoomIdeas)
  }, [GetRoomIdeasInfo]);

  return (
    <section className={styles.RoomIdeas}>
      <Navigation data={data} setParam={setParam}/>
      <RoomIdea data={data}/>
      <GoBackButton returnBtn={returnBtn} param={param}/>
    </section>
  );
}

export default RoomScenes;