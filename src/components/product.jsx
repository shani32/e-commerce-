import React from "react";
import  Data from '../store'
import { Link } from 'react-router-dom';


class Products extends React.Component{
    state={Data}
    getProductsLinks=()=>{
       return( this.state.Data.map((product)=>{
        return <Link className="title" to={`/product/${product.id}`} key={product.id }>{product.title}</Link> 
      })
   )
    }


    render =()=> {
    return(
        <div>
        {this.getProductsLinks()}
        </div>
    )
}
}
export default Products