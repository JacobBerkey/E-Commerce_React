import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CreateListing from "./components/CreateListing/CreateListing";
import Home from "./components/Home/Home";
import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from "axios";
import jwtDecode from "jwt-decode";


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: [],
      }
  }

 
componentDidMount () {
  const jwt = localStorage.getItem('token');
  try{
    const user = jwtDecode(jwt);
    this.setState({user});
  } catch {}
}


  createNewUser = async(User)=>{
  console.log("createNewUserFunction:",User)
  try{
    const response = await axios.post(`https://localhost:44394/api/authentication`, User)
  }
  catch(err){
      console.log("Unable to create new user", err);
  }
 }

  userSignIn = async (userCredentials) =>{
   console.log("userSignIn :", userCredentials)
   try{
     const response = await axios.post('https://localhost:44394/api/authentication/login', userCredentials)
     localStorage.setItem('token', response.data.token)
     console.log("token: ", response.data.token)
   }
   catch (err){
      console.log("Username and/or Password invalid. Please try again", err)
   }
 }
 
 logOutUser = async () =>{
  localStorage.removeItem('token');
 }

  render () {
    const user = this.state.user;
    return (
      <div>
        <NavBar logOutUser={this.logOutUser} /> 
        <SearchBar />

      <div className='App'>
        <Switch>
          <Route path="/Home" render={props => { 
          if(!user){
            return <Redirect to="/Login" />;}
            else{ return <Home {...props} />}}} />;
          <Route path="/Login" render ={props => <Login {...props} userSignIn={this.userSignIn}/>} />
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
