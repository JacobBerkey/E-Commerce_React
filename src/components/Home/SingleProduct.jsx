import React, {useState, useEffect} from 'react';
import {Button, Griad, Paper, Box} from '@material-ui/core'
import Rating from '@mui/material/Rating';
import "./SingleProduct.css"
import JazzBass from "../../Images/JazzBass.png"
import axios from 'axios';


function SingleProduct (props) {

    const [value, setValue] = useState(0);
    const [reviewBody, setReviewBody] = useState();

    useEffect(() => {
        setValue(props.product.rating)
    }, [props])

    const handleChange = (event) => {
        
        setReviewBody(event.target.value);      
    }    
  
    const handleClick = async (event) =>{     
        event.preventDefault();
        alert("Item added to Cart!")
        console.log("Props :", props)
        var newProduct = {
            productId : props.product.productId,
            quantity : 1
        }
        console.log(newProduct)
        props.addItemToCart(newProduct);
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        var review = {
            productId: props.product.productId,
            reviewBody: reviewBody
        }
        props.addReview(review)
        console.log("handleSubmit Review", review);
    }
        return (
            <div className="bigcontainer">
                <div className="container">
                    
                    <div className="left-column">
                        <img src={JazzBass} alt="product image"></img>
                    </div>

                    <div className="right-column">
                        <div className="product-description">
                            <span>{props.product.category}</span>
                            <h1> {props.product.name} </h1> 
                            <p>{props.product.description}</p>

                        <div className="product-price">
                            <span>${props.product.price}</span>
                        </div>
                        
                        <div className="cartButton">
                            <Button size="large" variant="contained" onClick={handleClick}>Add To Cart</Button>
                        </div>

                        <div className="rating">
                        <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                            />
                        </div>
                        
                    
                        <div className="reviews">
                            <h2>Reviews</h2>
                            <ul>
                                {props.prodReview.map(review =>
                                <div>
                                    <li>{review.reviewBody}</li>
                                </div>
                                )}
                            </ul>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input class="inputBox" name="reviewBody" onChange={handleChange} value={reviewBody} placeholder="Add a review..."/>
                            <div className="buttonReview">
                                <Button type="submit" size="large" variant="contained">Submit</Button>
                            </div>
                        </form>

                        </div>

                    </div>

                </div>
            </div>
        );
}
export default SingleProduct;
