import { useState, useEffect, useMemo } from 'react'
import './asset/App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom";

export default function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log('初回読み込み');
    async function fetchData() {
      const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
      const data = await response.json();
      setThreads(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Outlet context={[threads, setThreads]} />
    </>
  )
}

