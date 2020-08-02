import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Template } from './Template';
import { Home } from './Pages/Home';
import { Principles } from './Pages/Principles';
import { Ratings } from './Pages/Ratings';
import { Vernacular } from './Pages/Vernacular';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Template} />
      <>
        <Route path='/' exact component={Home} />
        <Route path='/principles' component={Principles} />
        <Route path='/ratings' component={Ratings} />
        <Route path='/vernacular' component={Vernacular} />
      </>
    </BrowserRouter>
  );
}

export default App;
