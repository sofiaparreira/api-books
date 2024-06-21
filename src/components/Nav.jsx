
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="flex justify-between px-8 py-6 bg-gray-800 mb-32">
        <Link className="font-semibold" to={`/`}>Blog</Link>
        <ul className="flex gap-16">
           
            <li> 
                <Link to={`/`}>Home</Link>
            </li>

            <li> 
                <Link to={`/new`} className="font-semibold border border-white py-2 px-6 rounded-2xl">New Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
