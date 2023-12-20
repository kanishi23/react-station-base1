import { Link } from "react-router-dom";

export default function Header() {
  return(
    <>
    <div>
      <h1>掲示板</h1>
      <Link to="/thread/new">スレッドを立てる</Link>
      
    </div>
    </>
  )
}