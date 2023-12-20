import { Link } from "react-router-dom";

export default function Header() {
  return(
    <>
    <div>
      <h1><Link to="/">掲示板</Link></h1>
      <Link to="/thread/new">スレッドを立てる</Link>
      
    </div>
    </>
  )
}