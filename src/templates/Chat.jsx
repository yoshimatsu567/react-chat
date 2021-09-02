import React from "react";

export const Chat = (props) => {
  return (
    <>
      <p>{props.username}</p>
      <p>{props.sentence}</p>
    </>
  );
};
