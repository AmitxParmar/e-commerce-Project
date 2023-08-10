import { useEffect, useContext, useReducer, createContext, useState } from 'react';
import reducer from '../reducers/cart_reducer';

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => JSON.parse(localStorage.getItem("cart")) || [];

// INITIAL STATE:
const initialState = {
    cart: [...getLocalStorage()],
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 534,
};

// CREATE CONTEXT (OBJECT), FOR US TO PASS THE DATA TO OBJECT.
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // ADD TO CART
    const addToCart = (id, color, amount, product) => {

        console.log("cart check1:", { id, color, amount, product })
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id, color, amount, product
            }
        });
    };

    // REMOVE ITEMS FROM CART
    const removeItem = (id) => {
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: id
        });
    }

    // TOGGLE AMOUNT
    const toggleAmount = (id, value) => {
        dispatch({
            type: TOGGLE_CART_ITEM_AMOUNT,
            payload: { id, value }
        });
    }

    // CLEAR CART
    const clearCart = (userId) => {
        dispatch({ type: CLEAR_CART, payload: userId });
    }
    //TODO: fix: localStorageIssue
    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS });
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                toggleAmount,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext)