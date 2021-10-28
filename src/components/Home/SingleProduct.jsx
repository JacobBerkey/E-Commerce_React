import React, {Component} from 'react';
import {Griad, Paper, Box} from '@material-ui/core'


const SingleProduct = (props) =>{


    return (
        
            <div>
            <h1>Single Product Will Go Here</h1>
            <h2> {props.product.name} </h2>
            </div>
            
    );

}
export default SingleProduct;
