import '../css/navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav>
            <div className="logo">
                My Logo
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;