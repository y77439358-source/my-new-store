import React from 'react';

const CartSummary = ({ items }) => {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartSummary;