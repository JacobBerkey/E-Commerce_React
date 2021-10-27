import SignInSide from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CreateListing from "./components/CreateListing/CreateListing";
import Home from "./components/Home/Home";
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        logged_in_user: [],
      }
  }

  // axios POST create user and GET token
 createNewUser = async(newUser)=>{
  console.log("createNewUserFunction:", newUser)
  try{
    const response = await axios.post("https://localhost:44394/api/authentication/", newUser)
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
          <Route path="/Login" component={SignInSide} />
          {/* <Route path="/Register" component={SignUp} /> */}
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
