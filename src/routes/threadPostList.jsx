import { useState, useEffect, useRef } from "react";
import { useLoaderData, useActionData, Form } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thredId}/posts`)
  const data = await response.json();
  console.log('data.posts', data.posts);
  return {
    thredId: params.thredId,
    posts: data.posts,
  };
}

export async function action({ request, params }) {
  const post = await request.formData().then(data => data.get("post"));
  console.log('params',params);

  const url = `https://railway.bulletinboard.techtrain.dev/threads/${params.thredId}/posts`;
  const body = JSON.stringify({post: post});
  await fetch(url, {method:"POST", headers:{'Accept': 'application/json'}, body}).then((res)=> res.json())
      .then(console.log)
      .catch(console.error);
  return null
}

export default function ThreadPostList() {
  const {posts, thredId} = useLoaderData();
  console.log('posst',posts);
  const [statePosts, setStatePosts] = useState(posts);
  const actionUrl = `/thread/${thredId}/posts`;
  
  const onHandleSubmit = async() => {
    console.log('onHandleSubmit');
    console.log('handle_posts',posts);
    await setStatePosts(posts);
  }

  return(
    
    <>
      <ul>
        {statePosts && statePosts.map((post, index) => {
          return(
              <li key={post.id+index}>{post.post}</li>
          )
        })}
      </ul>
      <Form method="post" action={actionUrl} onSubmit={onHandleSubmit}>
        <label htmlFor="post">createPost:</label>
        <input type="text" name="post" id="post" />
        <button type="submit" >Submit</button>
      </Form>
    </>
  )
}



function getActionData() {
  let count = 0;
  const end = 5;
  const interval = 3000;

  const intervalId = setInterval(
    function() {
      // console.log('num',count,":",newPost);
      // if (newPost!==undefined) {
      //   clearInterval(intervalId);
      //   return newPost
      // }

      count += 1;
      if (count == end) {
        clearInterval(intervalId);
      }
    }
    ,interval
  );
}
