import React, { Component } from 'react';
import './App.css';
import Admin from '../Admin/Admin.js';
import Understanding from '../Understanding/Understanding.js';
import Feeling from '../Feeling/Feeling.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Thanks from '../Thanks/Thanks.js';
import Header from '../Header/Header.js';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
