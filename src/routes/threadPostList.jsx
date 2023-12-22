import { useState, useEffect, useRef } from "react";
import { useLoaderData, Form } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`)
  const data = await response.json();
  console.log('data.posts', data.posts);
  return {
    posts: data.posts,
    postId: params.id,
  };
}

export default function ThreadPostList() {
  const {posts, postId} = useLoaderData();
  const [statePosts, setStatePosts] = useState(posts);
  const enteredPost = useRef();

  const onHandleSubmit = async(e) => {
    const post = enteredPost.current.value;
    const method = "POST";
    const body = JSON.stringify({post:post});
    const headers = {
      'Accept': 'application/json'
    };
    const url = `https://railway.bulletinboard.techtrain.dev/threads/${postId}/posts`;

    const data = await fetch(url, {method, headers, body})
    .then((res)=> res.json() )
    .then((data)=>{
      console.log
      return data
    })
    .catch(console.error);
    await setStatePosts([data, ...statePosts]);
  };

  return(
    <>
      <ul>
        {statePosts && statePosts.map((post, index) => {
          return(
              <li key={post.id+index}>{post.post}</li>
          )
        })}
      </ul>
      <Form onSubmit={onHandleSubmit}>
        <label htmlFor="post">createPost:</label>
        <input type="text" name="post" id="post" ref={enteredPost}/>
        <button type="submit" >Submit</button>
      </Form>
    </>
  )
}

