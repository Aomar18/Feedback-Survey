import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.js';
import Comprehension from '../Comprehension/Comprehension.js'; 
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Thanks from '../Thanks/Thanks.js';
import Results from '../Results/Results.js';
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
      <Route exact path="/" component={Feeling}/>
      <Route path="comprehension" component={Comprehension}/>
      <Route path="support" component={Support}/>
      <Route path="comments" component={Comments}/>
      <Route path="results" component={Results}/>
      <Route path="admin" component={Admin}/>
      </Router>
    );
  }
}

export default App;
