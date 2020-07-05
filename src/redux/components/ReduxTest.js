import React from "react";
import List from "../components/List";
import Form from "../components/Form";
import Post from "../components/Post"

const ReduxTest = (props) => {
  if(props.isAuthenticated) {
    return (
      <>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
    )
  }
  else {
    return (
      <div>NO ARTICLE</div>
    )
  }
};

export default ReduxTest;