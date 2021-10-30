import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CreateListing from "./components/CreateListing/CreateListing";
import Home from "./components/Home/Home";
import SingleProduct from "./components/Home/SingleProduct";
import ProfileScreen from "./components/Login/ProfileScreen";
import Products from "./components/Home/Products";
import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from "axios";
import jwtDecode from "jwt-decode";
import {Grid} from "@material-ui/core";


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: "",
        allProducts : [],
        selectedProd: []
      }
  }

 
componentDidMount () {
  const jwt = localStorage.getItem('token');
  try{
  const user = jwtDecode(jwt);
  this.setState({user});
  console.log("componentDidMount User :", user)
  this.getAllProducts();

  } catch (err) {
    console.log("component did mount error", err)
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
     console.log("ttttoken: ", response.data.token)
      window.location = '/Home';
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

 goToSingleProd = async (product) =>{
  const jwt = localStorage.getItem('token')
  let response = await axios.get(`https://localhost:44394/api/product/${product.productId}`, {headers: {Authorization: 'Bearer ' + jwt}})
  console.log("Get Single Product :", response.data, "token: ", response.data.token)
  this.setState({
    selectedProd: response.data
  })
  console.log("End of goToSingleProd", this.state.selectedProd)
  // window.location = '/Product';
  
}

 getItemsInShoppingCart = async()=>{
  const jwt = localStorage.getItem('token');
  let response = await axios.post(`https://localhost:44394/api/shoppingcart`, {headers: {Authorization: 'Bearer ' + jwt}});
  this.setState({
    shoppingCart : response.data
  })
 }

 addItemToCart = async (product) => {
   console.log("addItemToCart :", product)
   const id = product.productId
  const jwt = localStorage.getItem('token');
  console.log("AddItem :", id, "jwt :", jwt)
  let response = await axios.post(`https://localhost:44394/api/shoppingcart/${id}/`, product, {headers: {Authorization: 'Bearer ' + jwt}});
 }

 logOutUser = async () =>{
  localStorage.removeItem('token');
  window.location = '/Login'
 }

  sendUserToSignUp = async() =>{
    window.location = '/Register';
 }

  render () {
    var user = this.state.user;
    console.log("Entering Render On App.js")
    return (
      <Grid>
        <NavBar  user={user}  logOutUser={this.logOutUser} /> 
        
        <SearchBar />
      <div className='App'>
        <Switch>
          <Route path="/Profile" exact render={props => { 
          if(!user){
            return <Redirect to="/Login" />;
          }
          else{ 
            return <ProfileScreen {...props} user={user} />
          }}
        } />;
          <Route path="/Login" render ={props => <Login {...props} userSignIn={this.userSignIn} sendUserToSignUp={this.sendUserToSignUp}/>} />
          <Route path="/Register" render={props => <SignUp {...props} createNewUser={this.createNewUser} />} />
          <Route path="/shoppingcart" render={props => <ShoppingCart {...props} />} />
          <Route path="/create" component={CreateListing} />
          <Route path="/Product" render={props => <SingleProduct {...props} product={this.state.selectedProd} addItemToCart={this.addItemToCart} />} />
          <Route path="/Home" exact render={props => <Home {...props} user={user} allProducts = {this.state.allProducts} goToSingleProd={this.goToSingleProd}  />} />
        </Switch>
      </div>
      </Grid>
    )
  }
};

export default App;
