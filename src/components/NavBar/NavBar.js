import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {

    return(
        <nav>
            <ul>
                <Link to = '/'>
                    <button>Home</button>
                </Link>
                <Link to='/Login'>
                    <button>Login</button>
                </Link>
                <Link to='/Register'>
                    <button>Register</button>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;