import SignInSide from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SignUp />
      </div>
    )
  }
}

export default App