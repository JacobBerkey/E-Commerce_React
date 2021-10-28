import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CreateListing from "./components/CreateListing/CreateListing";
import Home from "./components/Home/Home";
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";
import {Redirect} from "react-router";

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        
      }
  }

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try{
      const user = jwt_decode(jwt);
      this.setState({
        user
      });
      console.log("CompDidMount", user)
    } catch(err) {
      console.log("CompDidMount token not found")
    }
  }

  // axios POST create user and GET token
 createNewUser = async(User)=>{
  console.log("createNewUserFunction:",User)
  try{
    const response = await axios.post(`https://localhost:44394/api/authentication`, User)
  }
  catch(err){
      console.log("Unable to create new user", err);
  }
 }



 render () {
  const user = this.state.user;
  return (
    <div><NavBar /> 
      <SearchBar />
    <div className='App'>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" render={props => <SignUp {...props} createNewUser={this.createNewUser} />} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/create" component={CreateListing} />
      </Switch>
    </div>
    </div>
  )
}
}

export default App
