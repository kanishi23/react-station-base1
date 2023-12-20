import { useLoaderData, Form } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`)
  const data = await response.json();
  console.log('data.posts', data.posts);
  return {
    posts: data.posts,
    postId: params.id
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const post = formData.get("post");

  const obj = {post: post};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json'
  }
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${params.id}/posts`
  fetch(url, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
  return null;
}

export default function ThreadPostList() {
  const {posts, postId} = useLoaderData();
  const url = `/thread/${postId}/posts`
  return(
    <>
    <ul>
      {posts.map((post, index) => {
        return(
          <>
            <li key={post.id+index}>{post.post}</li>
          </>
        )
      })}
    </ul>
    <Form method="post" action={url}>
      <label for="post">createPost:</label>
      <input type="text" name="post" id="post" />
      <button type="submit">Submit</button>
    </Form>
    </>
  )
}

