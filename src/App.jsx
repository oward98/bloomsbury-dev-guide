import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Template } from './Template';
import { Home } from './Pages/Home/Home';
import { Tests } from './Pages/Tests/Tests';
import { Ratings } from './Pages/Ratings/Ratings';
import { Vernacular } from './Pages/Vernacular/Vernacular';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Template} />
      <>
        <Route path='/' exact component={Home} />
        <Route path='/tests/' component={Tests} />
        <Route path='/ratings/' component={Ratings} />
        <Route path='/vernacular/' component={Vernacular} />
      </>
    </BrowserRouter>
  );
}

export default App;
