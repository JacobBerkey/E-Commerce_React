import React, {Component} from 'react';
import {Button} from '@material-ui/core';
//import Link from '@mui/material/Link';
import {Link} from "react-router-dom";


const Products = (props) =>{

    

    // return (
    //     <div>
    //         <h1>Products Will Go Here</h1>
    //         <ul>
    //             {props.allProducts.map(product => 
    //             <div onClick={ () => {props.goToSingleProd(product);}}>
    //             <li>{product.name}</li>
    //             </div>
    //             )}
    //         </ul>
    //     </div>
    // );

    // <Link href="/Register"   variant="body2">
    //                             {"Don't have an account? Sign Up"}
    //                             </Link>

    return (
        <div>
            <h1>Products Will Go Here</h1>
            <ul>
                {props.allProducts.map(product => 
                <div>
                    <div>
                <Link to="/Product">
                    <Button
                onClick={()=> {props.goToSingleProd(product);}}
                // Component ={Link}
                // to ="/Product"
            >
            View Product
            </Button>
            </Link>
            </div>
                <li>{product.name}</li>
                </div>
                )}
            </ul>
        </div>
    );
}
export default Products;
