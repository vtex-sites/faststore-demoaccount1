import React, { useState, useEffect } from "react";
import styles from "./RoomIdeasNavigation.module.scss";
import { Button } from '@faststore/ui'
// import { useQuery } from '../../../../../../src/sdk/graphql/useQuery'
import { useQuery } from 'src/sdk/graphql/useQuery'
import { GetRoomIdeas } from "../../../fragments/GetRoomIdeas";


const items = [
  {
    id: '232121',
    quantity: 2,
    seller: 1,
  },
]

export interface UserInformation {
  // Custom query type
  userInformation: {
    // Custom query postal code result
    postalCode: string
  }
}
export interface RoomIdeasNavigationProps {
  navigation: {
    grid: GridItem[];
    menu: MenuItem[];
  };
  return: {
    text: string;
    url: string;
    newWindow: boolean;
  };
}

type GridItem = {
  image: {
    alt: string;
    src: string;
  };
  title: string;
  url: string;
  button: string;
};

type MenuItem = {
  text: string;
  url: string;
};

function RoomIdeasNavigation({
  navigation: { menu, grid },
  return: returnBtn,
}: RoomIdeasNavigationProps) {
  
  const [path, setPath] = useState<string | null>(null);
  const [data, setData] = useState<any>('');
  const [menuItemsList, setMenuItemsList] = useState<any>();

  const params = {
    id: "1212"
  }

  const GetRoomIdeasInfo: any = useQuery(
    GetRoomIdeas,
    params
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (!GetRoomIdeasInfo) {
      return
    }

    setData(GetRoomIdeasInfo?.data?.GetRoomIdeas)
  }, [GetRoomIdeasInfo]);


  useEffect(() => {
    if (data) {
      setMenuItemsList(data.filter((item: any) => item.isNavigation))
    }
  }, [data]);

  return (
    <section className={styles.RoomIdeasNavigation}>
      <ul data-fs-room-ideas-menu>
        {menuItemsList && menuItemsList.map((menuItem: any, index: number) => (
          <li key={index} data-fs-room-ideas-menu-item>
            <a data-fs-menu-item-location={path ? path.includes(menuItem.slug) : false} href={menuItem.slug} target="_blank">{menuItem.name}</a>
          </li>
        ))}
      </ul>
      <div data-fs-room-ideas-grid>
        {grid.map((gridItem, index) => (
            <a key={index} href={gridItem.url} target="_blank" data-fs-room-ideas-grid-item>
                <img data-fs-grid-item-img data-fs-grid-idea={gridItem.button ? true : false} src={gridItem.image.src} alt={gridItem.image.alt} />
                {gridItem.button && <Button data-fs-grid-item-btn>{gridItem.button}</Button>}
                {gridItem.title && <div data-fs-grid-item-title>{gridItem.title}</div>}
            </a>
        ))}
      </div>
      {returnBtn.text && 
        <div data-fs-room-idea-return>
          <a data-fs-room-idea-return-link href={returnBtn.url}>{returnBtn.text}</a>
        </div>
      }
    </section>
  );
}

export default RoomIdeasNavigation;
