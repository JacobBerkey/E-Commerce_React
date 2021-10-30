import React, {Component} from 'react';
import {Griad, Paper, Box} from '@material-ui/core'


class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewBody: '',
            productId: this.props.product.productId
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addReview(this.state)
        console.log("handleSubmit Review", this.state);
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Single Product Will Go Here</h1>
                    <h2> {this.props.product.name} </h2> 
                </div>
                <div>
                    <h2>Reviews Here</h2>
                    <ul>
                        {this.props.prodReview.map(review =>
                        <div>
                            <li>{review.reviewBody}</li>
                        </div>
                        )}
                    </ul>
                </div>
               
                <form onSubmit={this.handleSubmit}>
                <input name="reviewBody" onChange={this.handleChange} value={this.state.reviewBody} placeholder="Add a public review..."/>
                <button type="submit">Comment</button>
                </form>

            </div>
            
        )
    }
            
    

}
export default SingleProduct;
