import React, {useState} from 'react';
import {Button, Griad, Paper, Box} from '@material-ui/core'


function SingleProduct (props) {


    const [reviewBody, setReviewBody] = useState();
    

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
            <div>
                <div>
                    <h1>Single Product Will Go Here</h1>
                    <h2> {props.product.name} </h2> 
                </div>
                
                <div>
                    <Button onClick={handleClick}>Add To Cart</Button>
                </div>
                
                <div>
                    <h2>Reviews Here</h2>
                    <ul>
                        {props.prodReview.map(review =>
                        <div>
                            <li>{review.reviewBody}</li>
                        </div>
                        )}
                    </ul>
                </div>
               
                <form onSubmit={handleSubmit}>
                <input name="reviewBody" onChange={handleChange} value={reviewBody} placeholder="Add a public review..."/>
                <button type="submit">Comment</button>
                </form>

            </div>
        );
}
export default SingleProduct;
