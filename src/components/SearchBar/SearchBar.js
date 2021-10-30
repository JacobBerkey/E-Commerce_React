import React, { Component } from 'react';
import "./SearchBar.css"
import {Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import {Form} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                searchQuery: '',
            }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchProduct(this.state.searchQuery);
    }

    render() {
        return (
            <Container>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Grid className="search-bar"> 
                        <TextField  fullWidth variant="outlined"
                        className="input"  type="text" name="searchQuery" placeholder="Search..."
                        onChange={this.handleChange} value={this.searchQuery} />
                    </Grid>
                </Form>
            </Container>
            
        )
    }
}

export default SearchBar;