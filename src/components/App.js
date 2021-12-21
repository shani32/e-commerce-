import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Products from './product';
import Header from './header';
import Homepage from './Homepage';
import ProductInfo from './productInfo';
import './style.css'

class App extends React.Component{
    render=()=>{

    return (
    <div>
      
        <BrowserRouter>
        <Header />
        <div>
        
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" exact component={ProductInfo} />
        </div>
        </BrowserRouter>
        
    </div>
    )
}
};

export default App