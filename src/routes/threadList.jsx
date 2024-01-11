import { Link, useOutletContext } from "react-router-dom";

export default function ThreadList() {
  console.log('スレッド一覧の表示');
  const [threads] = useOutletContext();
  
  return(
    <>
      <div>
        <h1>新着スレッド</h1>
      </div>
      <ul>
        {threads.map((thread, index) => {
          const url = `/thread/${thread.id}/posts`
          return(
            <li key={thread.id}>
              <Link to={url}>threadTitle:{thread.title} / threadId:{thread.id}</Link>
            </li>
          )
        })}
      </ul>
      
    </>
  )
}