import React from "react";
import List from "../components/List";
import Form from "../components/Form";
import Post from "../components/Post"

const ReduxTest = (props) => {
  if(props.isAuthenticated) {
    return (
      <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
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