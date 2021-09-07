import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import movies from './data';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <Header />
          <SearchBar ryanBolado={movies}/>
        </div>
      );
  }
}

export default App;
