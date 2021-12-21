import React from "react";
import {Link} from 'react-router-dom'
import Data from "../store";

export default class ProductInfo extends React.Component{
    state={Data};
     productInfo=()=>{
         const product= this.state.Data.find((product)=>product.id=== parseInt(this.props.match.params.id))
        const {title, imageUrl, price,size}=product;
        console.log(product)
        
        return(
            <div>
                <p>{title}</p>
                <img src={imageUrl} alt="" width="80" />
                <p>{`price: ${price}`}</p>
                <p>{`size: ${size}`}</p>
            </div>
        )
    
    }
    render=()=>{
        return(
            <div>
                {this.productInfo()} 
                <Link to="/products"><button>back</button></Link>   

            </div>
        )
    }
}