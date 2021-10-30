import React from 'react';
import './Home.css'
import axios from 'axios'
import {Button, Grid} from '@material-ui/core';
import {Link} from "react-router-dom";
import {Table} from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';



const Home = (props) =>{



        return(

             <Grid justifyContent="center">
                 <SearchBar searchForProduct={props.searchForProduct}/>
            <Grid className="app-container" style={{marginRight: "200px"}}>
            
            <div >
            <h1> Product List </h1>
            <div>
            <Table>
               
                <thead style={{backgroundColor: "#6c757d", color: "white"}}>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Average Rating</th>
                        <th> View Product</th>
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
                        <td><Link to="/Product"><Button onClick={()=> {props.goToSingleProd(product);}}
                    // Component ={Link}
                    // to ="/Product"
                        >View Product</Button></Link></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>  
        </Grid>
        </Grid>
        )
    
}
export default Home;
