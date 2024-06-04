import React from "react";
import replaceParam from "../../../../../utils/replaceParam";

export interface GoBackButtonProps {
  param?: string;
  url?: string;
}

function GoBackButton({ param, url }: GoBackButtonProps) {
  const returnBtn = {
    text: "< BACK TO {PARAM} INSPIRATION",
    url: "/shop-by-room",
    newWindow: true,
  };

  return (
    <>
      {param && (
        <div data-fs-room-idea-return>
          <a data-fs-room-idea-return-link href={url ? url : returnBtn.url}>
            {replaceParam(returnBtn.text, param)}
          </a>
        </div>
      )}
    </>
  );
}

export default GoBackButton;
