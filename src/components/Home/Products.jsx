import React, {Component} from 'react';
import {Button} from '@material-ui/core'


const Products = (props) =>{

    

    return (
        <div>
            <h1>Products Will Go Here</h1>
            <ul>
                {props.allProducts.map(product => 
                <li>{product.name} </li>
                )} 
            </ul>
        </div>
    );
}
export default Products;
