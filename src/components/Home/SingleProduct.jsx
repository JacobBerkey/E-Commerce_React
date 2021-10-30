import React, {useState} from 'react';
import {Button, Griad, Paper, Box} from '@material-ui/core'


const SingleProduct = (props) =>{

  
    const handleClick = async (event) =>{     
        event.preventDefault();
        console.log("Props :", props)
        var newProduct = {
            productId : props.product.productId,
            quantity : 1
        }
        console.log(newProduct)
        props.addItemToCart(newProduct);
    }

    return (
        
            <div>
                <h1>Single Product Will Go Here</h1>
                <h2> {props.product.name} </h2> 
                <Button onClick={handleClick}>Add To Cart</Button>
            </div>
            
    );
}
export default SingleProduct;
