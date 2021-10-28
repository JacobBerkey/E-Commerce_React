import React, {Component} from 'react';
import {Button} from '@material-ui/core'


const Products = (props) =>{

    console.log("products:",props)
    const product = props.allProducts[0];

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log("handleAddToCart :", product.productId, "Product :", product);
        props.addItemToCart(product.productId)
    }

    return (
        <div>
            <h1>Products Will Go Here</h1>
            <ul>
                {props.allProducts.map(product => 
                <li>{product.name}<Button onClick={handleSubmit}>Add To Cart</Button></li>
                )}
                
            </ul>
        </div>
    );

}
export default Products;
