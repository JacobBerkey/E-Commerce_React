import React, {Component} from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap';



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
  

   

    render() { 
        return ( 
            <div style={{marginRight: "350px", marginLeft: "250px"}} >
                <Table  striped bordered hover>
                            <thead>
                                <tr>
                                <th>PRODUCT NAME</th>
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
                                </tr>   
                            </tbody>
                            ))}
                </Table>
            </div>
         );
    }
}
 
export default ShoppingCart;





