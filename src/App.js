import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Tabs from './components/tabs/tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabs />
        <Footer />
      </div>
    );
  }
}

export default App;
