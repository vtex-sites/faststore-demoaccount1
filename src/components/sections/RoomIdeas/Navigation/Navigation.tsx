import React, { useState, useEffect } from "react";

export interface NavigationProps {
  data: [Item];
  setParam: (value: any) => void;
}

type Item = {
  name: string;
  url: string;
};

function Navigation({ data, setParam }: NavigationProps) {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (path && data) {
      const matchedItem = data.find((menuItem) => path.includes(menuItem.url));
      if (matchedItem) {
        setParam(matchedItem.name);
      }
    }
  }, [path, data, setParam]);

  return (
    <ul data-fs-room-ideas-menu>
      {data &&
        data.map((menuItem: any, index: number) => (
          <li key={index} data-fs-room-ideas-menu-item>
            <a
              data-fs-menu-item-location={
                path ? path.includes(menuItem.url) : false
              }
              href={`/shop-by-room${menuItem.url}`}
            >
              {menuItem.name}
            </a>
          </li>
        ))}
    </ul>
  );
}

export default Navigation;
