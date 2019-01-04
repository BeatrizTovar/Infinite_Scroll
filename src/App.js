import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './components/infinitescroll' 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <InfiniteScroll/>
      </React.Fragment>
    )
  }
}

export default App;
