import SignInSide from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import SearchBar from "./components/SearchBar/SearchBar";
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SignInSide />
      </div>
    )
  }
}

export default App
