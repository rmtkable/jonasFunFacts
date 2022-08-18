import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter, Router } from 'react-router-dom';
import factOne from './component/fact-one';
import factTwo from './component/fact-two';
import factThree from './component/fact-three';


class App extends Component{
  render(){
  return (
    <BrowserRouter>
     <div className="App">
        <Navbar />
        <Router path='/' component={factOne}/>
        <Router path='/fact-two' component={factTwo}/>
        <Router path='/fact-three' component={factThree}/>
        <p className='heading-fact'> Fun Fact about Chelsea Football Club</p>
     </div>
    </BrowserRouter>
  )
  }
}

export default App;
