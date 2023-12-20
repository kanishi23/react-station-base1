import { Form } from "react-router-dom";

export function loader({ request, params }) {
  return null;
}
export async function action({ request }) {

  const formData = await request.formData();
  const title = formData.get("title");

  const obj = {title: title};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json'
  }
  const url = "https://railway.bulletinboard.techtrain.dev/threads"
  fetch(url, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
  return null;
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

