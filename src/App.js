import SignInSide from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        all_products: [],
        selected_product: [],
        logged_in_user: [],
        all_reviews: [],
        selected_review: [],
        shopping_cart: [],
      }

  }

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      this.setState({user})
    }
    catch {
      
    }
  }

  render () {
    return (
      <div className='App'>
        <Switch>
        <SearchBar />
        <SignUp />
        <SignInSide />
        </Switch>
      </div>
    )
  }
}

export default App
