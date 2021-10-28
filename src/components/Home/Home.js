import React from 'react';
import './Home.css'
import Products from './Products';



function Home(props) {
    return (
        <div>
            <h1>Our eCommerce Site</h1>
            <Products allProducts = {props.allProducts} goToSingleProd={props.goToSingleProd} addItemToCart={props.addItemToCart} />
        </div>

    )
}
export default Home;