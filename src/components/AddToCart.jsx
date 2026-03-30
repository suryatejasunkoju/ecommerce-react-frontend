import { useState } from "react";
import { useEffect } from "react";


function AddToCart({ productId, quantity }) {
    // console.log(`In updateCart, productId=${productId}, quantity=${quantity}`);
    const [cartItems, setCartItems] = useState([]);
    const updateCart = () => {
        let cartItem={ productId: productId, quantity: quantity };
        let updatedCartItems = [...cartItems];
        console.log("In updateCart, cartItems=", cartItems);
        const isItemExists = cartItems.find(item => item.productId === productId);
        console.log("isItemExists=", isItemExists);
        if (cartItems === undefined || cartItems.length === 0 || !isItemExists) {
            updatedCartItems=[cartItem, ...cartItems];
        }
        else 
        {
            const updatedCartItem={productId: productId, quantity:quantity+1};
            console.log("updatedCartItem=", updatedCartItem);
            updatedCartItems=cartItems.map(item=>{
                (item.productId===productId)?updatedCartItem:item
            });
        }
        setCartItems(updatedCartItems);
    };
    useEffect(() => {
        // console.log("AddToCart::updatedCartItems=", cartItems);
    }, [cartItems])

    return (
        <button className="add-to-cart-btn" onClick={updateCart}>Add to Cart</button>
    );
}
export default AddToCart;