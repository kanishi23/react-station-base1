import { useLoaderData, Form } from "react-router-dom";

export async function loader({ params }) {
  console.log("選択スレッドでの既存ポスト一覧の読み込み");
  const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.thredId}/posts`)
  const data = await response.json();
  return {
    thredId: params.thredId,
    posts: data.posts,
  };
}

export async function action({ request, params }) {
  console.log("選択スレッドでの新規ポストの登録");
  const post = await request.formData().then(data => data.get("post"));
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${params.thredId}/posts`;
  const body = JSON.stringify({post: post});
  await fetch(url, {method:"POST", headers:{'Accept': 'application/json'}, body}).then((res)=> res.json());
      // .then(console.log)
      // .catch(console.error);
  return null
}

export default function ThreadPostList() {
  console.log("選択スレッドでの既存ポスト一覧表示/新規ポスト登録フォームの表示");
  const {posts, thredId} = useLoaderData();
  const actionUrl = `/thread/${thredId}/posts`;
  
  return(
    <>
      <ul>
        {posts && posts.map((post, index) => {
          return(
              <li key={post.id+index}>{post.post}</li>
          )
        })}
      </ul>
      <Form method="post" action={actionUrl}>
        <label htmlFor="post">createPost:</label>
        <input type="text" name="post" id="post" />
        <button type="submit" >Submit</button>
      </Form>
    </>
  )
}

