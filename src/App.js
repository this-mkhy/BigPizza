import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import BigPizza from './components/BigPizza/BigPizza';
import Products from './components/Products/Products';
import {productData, vegetarianData, familyData, sweetsData} from './components/Products/DataApi';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

class App extends Component{
   
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyle />
          <BigPizza />
          <Products heading="Choose your favorite pizza" data={productData} />
          <Products heading="Choose your vegetarian pizza" data={vegetarianData} />
          <Products heading="Choose for you family" data={familyData} />
          <Feature />
          <Products heading="Choose your favorite dessert" data={sweetsData} /> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
