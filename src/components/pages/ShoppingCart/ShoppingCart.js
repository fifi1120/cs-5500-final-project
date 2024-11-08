import React from "react";
import './ShoppingCart.css'; // Create this CSS file for styling
import Footer from "../../Footer";

export default function ShoppingCart() {
    return (
        <>
        <div className="shopping-cart-container">
            <h1 className="shopping-cart-title">CART</h1>
            <a href="/" className="continue-shopping">Continue shopping</a>
            <p className="cart-empty-message">Your cart is currently empty.</p>
        </div>
        <Footer />
        </>
    );
}