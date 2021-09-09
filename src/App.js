import React from 'react';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

import movies from './data';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <MovieLibrary movies={ movies } />
    </>
  );
}

export default App;
