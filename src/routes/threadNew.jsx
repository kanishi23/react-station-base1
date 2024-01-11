import { Form, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ThreadNew() {
  console.log("新規スレッド登録画面の表示");
  const [threads, setThreads] = useOutletContext();
  const navigate = useNavigate();

  const onHandleSubmit = async (event) => {
    console.log("新規スレッドの登録");
    const title = event.target[0].value;
 
    const url = "https://railway.bulletinboard.techtrain.dev/threads"
    const body = JSON.stringify({title: title});
    const data =await fetch(url, {method:"POST", headers:{'Accept': 'application/json'}, body}).then((res)=> res.json());
    // .then(console.log).catch(console.error);
    setThreads([data, ...threads]);
    navigate("/");
  }

  return(
    <>
      <Form onSubmit={onHandleSubmit} >
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

