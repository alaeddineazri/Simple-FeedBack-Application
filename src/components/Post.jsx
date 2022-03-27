import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Post = () => {
  const params = useParams();

  return (
    <Card>
      <h1>ID </h1>
      <div>{params.id}</div>
      <h1>Name </h1>
      <div>{params.name}</div>
    </Card>
  );
};

export default Post;
