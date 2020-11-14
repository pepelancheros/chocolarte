import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import '../src/styles/styles.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/products' component={Products}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
