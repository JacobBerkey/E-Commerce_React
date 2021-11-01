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
                            <h3>{product.name}</h3>
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

{/* <Table>
                            
                            <tbody>
                                {props.allProducts.map((product) => (
                                    
                                <tr>
                                    
                                    <td>
                                        {product.name}<br></br>
                                        ${product.price}<br></br>
                                        <Link to="/Product"><Button onClick={()=> {props.goToSingleProd(product);props.getReviews(product.productId)}}>View Product</Button></Link>
                                    </td>
                           
                                </tr>
                                ))}
                            </tbody>
                                </Table> */}

{/* <div className="row1">

                        

<h1 >Music Plus</h1> <br/>
<h5> "Where artists are born" </h5>



</div>

<div className="row">

<div className="col">

<SearchBar searchForProduct={props.searchForProduct}/>
<Grid style={{marginLeft: "850px"}}> <Button variant="contained" onClick={handleClick}>Refresh Product List</Button></Grid>

</div>

</div> */}

