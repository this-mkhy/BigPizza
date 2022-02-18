import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import BigPizza from './components/BigPizza/BigPizza';

class App extends Component{

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyle />
          <BigPizza />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
