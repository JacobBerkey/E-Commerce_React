import React, {Component} from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {Button} from '@material-ui/core';



class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            shoppingCart : [],
        }
    }



    componentDidMount = () =>{
        this.getShoppingCart();
        
    }

    getShoppingCart = async()=>{
        const jwt = localStorage.getItem('token');
        let response = await axios.get(`https://localhost:44394/api/shoppingcart`, {headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({
          shoppingCart : response.data
        })
        console.log("ShoppingCart :", this.state.shoppingCart)
       }
       
    deleteItem =async(productId) =>{
        const jwt = localStorage.getItem('token');
        let response = await axios.delete(`https://localhost:44394/api/shoppingcart/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}});
        this.getShoppingCart();
        return response.status
    }

   

    render() { 
        return ( 
            <div style={{marginRight: "350px", marginLeft: "250px"}} >
                <Table  striped bordered hover>
                            <thead>
                                <tr>
                                <th>PRODUCT</th>
                                <th>CATEGORY</th>
                                <th>DESCRIPTION</th>
                                <th>QUANTITY</th>
                                <th>PRICE</th>
                                </tr>
                            </thead>
                            {this.state.shoppingCart.map((product)=>(
                            <tbody>
                                <tr>
                                <td>{console.log("productName :", product.name)}{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.extendedPrice}</td>
                                <Button variant="contained" onClick={()=>this.deleteItem(product.productId)}>Delete</Button>
                                </tr>   
                            </tbody>
                            ))}
                </Table>
            </div>
         );
    }
}
 
export default ShoppingCart;





