import React from 'react';
import './Home.css'
import axios from 'axios'
import Products from './Products';



export default class MusicTable extends React.Component {
    state = {
        products: [],
    };

componentDidMount(){
    axios.get('https://localhost:44394/api/product').then(res => {
        console.log(res);
        this.setState({ products : res.data });
    });
}



render() {
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
                </tr>
            </thead>
            <tbody>
                {this.state.products.map((product) => (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td>{product.rating}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>   
    )
}
}