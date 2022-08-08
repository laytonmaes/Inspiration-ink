import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import { NavLink } from 'react-router-dom';

// -------------------- components -------------------- //
import Home from './Components/Home/Home';
import RandomChoice from './Components/RandomChoice/RandomChoice';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to={"/"} className="Nav">
          <h1>Inspiration Ink.</h1>
          <div className="line"></div>
        </NavLink>
      </header>
        <main className='App-main'>
        <Route exact path="/" render = {() => {
          return ( <Home />)
        }} />
        <Route exact path="/random-:arr" render = {({ match }) => {
          return <RandomChoice userChoice={match.params.arr} />
        }} />
        <Route exact path="/user-submit" render = {() => {
          return <Form />
        }} />
        </main>
    </div>
  );
}

export default App;
