import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function ThreadList() {


  const [threads, setThreads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
      
      const data = await response.json();
      console.log('data',data);
      setThreads(data);
    }
    fetchData();
  }, []);


  return(
    <>
      <div>
        <h1>新着スレッド</h1>
      </div>
      <ul>
        {threads.map((thread, index) => {
          const url = `/thread/${thread.id}/posts`
          return(
            <li key={thread.title+index}>
              <Link to={url}>threadTitle:{thread.title} / threadId:{thread.id}</Link>
            </li>
          )
        })}
      </ul>
      
    </>
  )
}