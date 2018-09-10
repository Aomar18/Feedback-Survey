import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin.js'
import Understanding from '../Understanding/Understanding.js';
import Feeling from '../Feeling/Feeling.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Thanks from '../Thanks/Thanks.js';
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
      <Route exact path="/" component={Feeling}/>
      <Route path="understanding" component={Understanding}/>
      <Route path="support" component={Support}/>
      <Route path="comments" component={Comments}/>
      <Route path="Thanks" component={Thanks}/>
      <Route path="admin" component={Admin}/>
      </Router>
    );
  }
}

export default App;
