import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Route';
import Sidebar from './UIComponent/Sidebar/Sidebar';
import Topnav from './Navigation/TopNav';
function App() {
          return (
                    <Fragment>
                              <Topnav />
                              <Routes />
                              <Sidebar />
                    </Fragment>
          );
}

export default App;
