import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';


function NavBar(props) {
    return(
        <nav>
            {props.user && <h4>Welcome {props.user.email}</h4>}
            <ul>
                <Link to = '/Home'>
                    <Button>Home</Button>
                </Link>
                <Link to='/Login'>
                    <Button>Login</Button>
                </Link>
                <Link to='/Login'>
                    {console.log("navbar: ", props)}
                    <Button onClick={props.logOutUser}>LogOut</Button>
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