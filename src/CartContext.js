import { createContext, useState } from "react";
import { productsArray } from "./components/productStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => { }, //this function does not have no logic. bcz we can't define functions inside the context
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);

    // [ { id:1 quantity:2 } ]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }


    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 0){ //product is not in cart
            setCartProducts(
                [
                    ...cartProducts, //... - spread operator - meaning - take all of the objects already in our cart and put them front of the array
                    {
                        id: id,
                        quantity:1
                    }
                ]
            )
        }else { //product is in cart 
            //[ {id:1, quantity:3} ] , [ { id:2, quantity: 1 + 1} ]
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                               //if condition
                    ? { ...product, quantity: product.quantity + 1} //if statement is true
                    : product                                       //if statement is false
                )
            )
        }
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

//context (cart, addToCart, removeCart)
//Provider -> gives your React app access to all the things in your context