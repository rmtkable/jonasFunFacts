import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import factOne from './component/fact-one';
import factTwo from './component/fact-two';
import factThree from './component/fact-three';


class App extends Component{
  render(){
  return (
    <BrowserRouter>
     <div className="App">
        <Navbar />
        <Switch>
        <Route path='/' component={factOne}/>
        <Route path='/fact-two' component={factTwo}/>
        <Route path='/fact-three' component={factThree}/>
        </Switch>
     </div>
    </BrowserRouter>
  )
  }
}

export default App;
