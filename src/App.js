import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const HOME = <h1>HOME</h1>

const A = <h1>가가가</h1>

const B = <h1>나나나</h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="skin-blue">
        <ul className="nav nav-tabs">
        
          <li  className="active"><Link to="/a"> Home</Link></li>
          <li ><Link  to="/b">Profile</Link></li>
          <li ><Link  to="/c">Messages</Link></li>

        </ul>
        <div>
      {HOME}
      </div>
      </div>
     

      </BrowserRouter>
    );
  }
}

export default App;
