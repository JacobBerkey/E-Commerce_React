import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';


function NavBar() {
    return(
        <nav>
            <ul>
                <Link to = '/'>
                    <Button>Home</Button>
                </Link>
                <Link to='/Login'>
                    <Button>Login</Button>
                </Link>
                <Link to='/Register'>
                    <Button>Register</Button>
                </Link>
                <Link to='/shoppingcart'>
                    <Button>Shopping Cart</Button>
                </Link>
                <Link to='/create'>
                    <Button>Create Listing</Button>
                </Link>
            </ul>
        </nav>
    );
}
export default NavBar;