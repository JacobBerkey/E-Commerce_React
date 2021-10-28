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
        allProducts : []
      }
  }

 
componentDidMount () {
  const jwt = localStorage.getItem('token');
  this.getAllProducts();
  try{
    const user = jwtDecode(jwt);
    this.setState({user});
    console.log("componentDidMount :", user)
  } catch {
    console.log("user state no accessible")
  }
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
 
 getAllProducts = async () =>{
   const jwt = localStorage.getItem('token')
   let response = await axios.get('https://localhost:44394/api/product', {headers: {Authorization: 'Bearer ' + jwt}})
   console.log("getAllProducts :", response.data, "token: ", response.data.token)
   this.setState({
     allProducts : response.data
   })
 }



 logOutUser = async () =>{
  localStorage.removeItem('token');
 }

  sendUserToSignUp = async() =>{
    window.location = '/Register';
 }

  render () {
    const user = this.state.user;
    return (
      <div>
        <NavBar  user={user}  logOutUser={this.logOutUser} /> 
        <SearchBar />

      <div className='App'>
        <Switch>
          <Route path="/home" render={props => { 
            {console.log("renderUser :", user)}
          if(!user){
            return <Redirect to="/Login" />;}
            else{ return <Home {...props} user = {user}/>}}} />;
          <Route path="/Login" render ={props => <Login {...props} userSignIn={this.userSignIn} sendUserToSignUp={this.sendUserToSignUp}/>} />
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
