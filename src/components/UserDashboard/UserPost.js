import React from "react";

const UserPost = (props) => {
  return (
    <div>
      <span>{props.title}</span> - <span>{props.post}</span>
    </div>
  );
};

export default UserPost;
