import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Room from './Pages/Room';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import SingleRoom from './Pages/SingleRoom';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/room"  component={Room} />
      <Route exact path="/room/:taraa" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
