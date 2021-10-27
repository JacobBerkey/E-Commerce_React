import SignInSide from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
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

  // componentDidMount(){
  //   const jwt = localStorage.getItem('token');
  //   try {
  //     const user = jwtDecode(jwt);
  //     this.setState({user});
  //   }
  //   catch {}
  // }

  render () {
    const user = this.state.user;
    return (
      <div><SearchBar />
      <div className='App'>
        <Switch>
          <Route path="/Login" component={SignInSide} />
          <Route path="/Register" component={SignUp} />
        </Switch>
      </div>
      </div>
    )
  }
}

export default App
