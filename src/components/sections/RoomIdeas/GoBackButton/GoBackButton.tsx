import React from "react";

export interface GoBackButtonProps {
  returnBtn: {
    text: string;
    url: string;
    newWindow: boolean;
  };
  param?: string;
}

function GoBackButton({
  returnBtn,
  param
}: GoBackButtonProps) {

  const replaceParam = (text: string, param: string | undefined) => {
    return param ? text.replace("{PARAM}", param.toUpperCase()) : text;
  };

  const buttonText = replaceParam(returnBtn.text, param);
  
  return (
    <>
      {param &&
      <div data-fs-room-idea-return>
        <a data-fs-room-idea-return-link href={returnBtn.url}>{buttonText}</a>
      </div>}
    </>
  );
}

export default GoBackButton;
