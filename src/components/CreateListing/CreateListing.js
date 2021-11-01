import React, { Component } from "react";
import axios from "axios";
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import {Link} from "react-router-dom";

class CreateListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name : "",
        category : "",
        description : "",
        price : "",
        rating : ""
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value,
        });
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        });
    }
    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value,
        });
    }
    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value,
        });
    }

    createSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name : this.state.name,
            description : this.state.description,
            price : parseInt(this.state.price),
            rating : parseInt(this.state.rating),
            category : this.state.category
        }
        console.log('Create Submit', this.props, newProduct)
        this.props.createAProduct(newProduct);
    };

    render() {
        return (
                <form onSubmit={this.createSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" onChange={this.handleDescriptionChange} value={this.state.description}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" onChange={this.handlePriceChange} value={this.state.price}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" placeholder="Rating" onChange={this.handleRatingChange} value={this.state.rating}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Floating label select example" onChange={this.handleCategoryChange} value={this.state.category}>
                                                        <option>Select a Category:</option>
                                                        <option value="Guitar">Guitar</option>
                                                        <option value="Amp">Amp</option>
                                                        <option value="Keyboard">Keyboard</option>
                                                        <option value="Drums">Drums</option>
                                                        <option value="Live Sound">Live Sound</option>
                                                    </Form.Select>
                    </Form.Group>
                    <Grid style={{marginLeft: "850px"}}><Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button></Grid>
                </form>
    );
    }
}

export default CreateListing;