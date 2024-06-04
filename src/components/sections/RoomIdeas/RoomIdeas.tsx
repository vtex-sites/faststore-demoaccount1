import React, { useState, useEffect } from "react";
import styles from "./RoomIdeas.module.scss";
import { useQuery } from "src/sdk/graphql/useQuery";
import { GetRoomIdeas } from "../../../fragments/GetRoomIdeas";
import Navigation from "./Navigation/Navigation";
import RoomIdea from "./RoomIdea/RoomIdea";

function RoomIdeas() {
  const [data, setData] = useState<any>("");
  const [param, setParam] = useState<any>(null);
  const [roomIdeas, setRoomIdeas] = useState<any>("");
  const [selectedScene, setSelectedScene] = useState<any>("");

  const params = {
    id: "allow",
  };

  // We request all the roomIdeas information
  const GetRoomIdeasInfo: any = useQuery(GetRoomIdeas, params);

  useEffect(() => {
    if (!GetRoomIdeasInfo) {
      return;
    }

    setData(GetRoomIdeasInfo?.data?.GetRoomIdeas);
  }, [GetRoomIdeasInfo]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setRoomIdeas(data.roomIdeas);
  }, [data]);

  return (
    <>
      {data && (
        <section className={styles.RoomIdeas}>
          {!selectedScene && (
            <Navigation data={roomIdeas} setParam={setParam} />
          )}
          <RoomIdea
            data={roomIdeas}
            param={param}
            selectedScene={selectedScene}
            setSelectedScene={setSelectedScene}
          />
        </section>
      )}
    </>
  );
}

export default RoomIdeas;
