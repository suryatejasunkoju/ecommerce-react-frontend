import { useState } from 'react'
import AddToCart from "./AddToCart"


function Product({product}) 
{
    
    // console.log("Product::product=", product);
    // console.log("Product::product.id=", product.id);
    // const endpoint = "products/1";
    // const url = import.meta.env.VITE_BACKEND_API_BASE_URL;
    // console.log("url=", url);
    // const completeUrl = url+endpoint;
    // console.log("completeUrl=", completeUrl);
    // const fetchData = async () => 
    // {
    //     const res = await fetch(completeUrl);
    //     const data = await res.json();
    //     console.log("fff..");
    //     console.log(data);
    // }
    // fetchData();
    return (
        <div className="product-card">
            <img src={product.image} />
            <p>${product.title}</p>
            <p className='price' >${product.price}</p>
            {/* <AddToCart productId={product.id} quantity={1}/> */}
            {/* <button className="add-to-cart-btn" >Add to Cart</button> */}
        </div>
    )
}
export default Product;