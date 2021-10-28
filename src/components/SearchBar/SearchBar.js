import React, { Component } from 'react';
import "./SearchBar.css"
import {Paper, TextField} from '@material-ui/core';

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
        this.props.searchVideo(this.state.searchQuery);
    }

    render() {
        return (

            // <Paper elevation={6} style={{padding:'25px', color: "black"}}>
            // <form onSubmit={this.handleSubmit} style={{backgroundColor: "white"}}>
            //     <TextField fullWidth label="Search for..." onChange={this.handleChange}></TextField>
            // </form>
            // </Paper>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="search-bar"> 
                <input className="input" type="text" name="searchQuery" placeholder="Search..."
                onChange={this.handleChange} value={this.searchQuery}/>
                <button className="button" type="submit">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchBar;