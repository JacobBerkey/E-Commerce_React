import React from 'react';
import './Home.css'
import axios from 'axios'
import {Button, Grid, Box} from '@material-ui/core';
import {Link} from "react-router-dom";
import {Table} from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import JazzBass from "../../Images/JazzBass.png"


const Home = (props) =>{


        const handleClick = (event) =>{
            event.preventDefault();
            props.getAllProducts();
        }


        return(
            <div>

                <SearchBar searchForProduct={props.searchForProduct}/>
                <div className="buttonRefresh">
                    <Button variant="contained" onClick={handleClick}>Refresh Product List</Button>
                </div>
                <div className="saleHeader">
                    <h3>Products for sale:</h3>
                </div>
                    
                <div className="grid-container">
                                
                    {props.allProducts.map((product) => (
        
                    <div className="item">
                        <div className="card">
                            <img src={JazzBass} alt="product image"></img>
                            <h6>{product.name}</h6>
                            <p className="price">${product.price}</p>
                            <Link to="/Product"><Button onClick={()=> {props.goToSingleProd(product);props.getReviews(product.productId)}}>View Product</Button></Link>
                        </div>
                    </div>
                    ))}
            
                </div>

            </div>

            
        )
    
}
export default Home;



