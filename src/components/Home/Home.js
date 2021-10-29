import React from 'react';
import './Home.css'
import axios from 'axios'
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";



const Home = (props) =>{



        return(
            <div className="app-container">
            <h1> Product List </h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Average Rating</th>
                        <th> Add To Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allProducts.map((product) => (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td>{product.rating}</td>
                        <td><button onClick>Add Item To Cart</button></td>
                        <td><Link to="/Product"><Button onClick={()=> {props.goToSingleProd(product);}}
                    // Component ={Link}
                    // to ="/Product"
                >           View Product</Button></Link></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>   
        )
    
}
export default Home;
