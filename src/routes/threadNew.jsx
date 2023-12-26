import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
  const title = await request.formData().then(data => data.get("title"));
 
  const url = "https://railway.bulletinboard.techtrain.dev/threads"
  const body = JSON.stringify({title: title});
  await fetch(url, {method:"POST", headers:{'Accept': 'application/json'}, body}).then((res)=> res.json()).then(console.log).catch(console.error);
  return redirect("/");
}

export default function ThreadNew() {
  return(
    <>
      <Form method="post" action='/thread/new'>
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

