import { useEffect, useState } from 'react';
import CartSummary from '../../components/CartSummary';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setLoading(false);
    }, []);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleUpdateQuantity = (itemId, quantity) => {
        const updatedCart = cartItems.map(item => 
            item.id === itemId ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="text-lg">{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                                    min="1"
                                    className="border rounded p-1 w-16"
                                />
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
                        </div>
                    ))}
                    <CartSummary items={cartItems} />
                </div>
            )}
        </div>
    );
};

export default CartPage;