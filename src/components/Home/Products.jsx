import React, {Component} from 'react';
import {Griad, Paper, Box} from '@material-ui/core'


const Products = (props) =>{


    return (
        <div>
            <h1>Products Will Go Here</h1>
            <ul>
                {props.allProducts.map(product => 
                <div onClick={ () => {props.goToSingleProd(product);}}>
                <li>{product.name}</li>
                </div>
                )}
            </ul>
        </div>
    );

}
export default Products;
