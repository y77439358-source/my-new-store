import React from 'react';
import Link from 'next/link';
//import { useCart } from '../lib/cart'; // Assuming you have a cart context or hook

const Header = () => {
    // const { itemCount } = useCart(); // Get the number of items in the cart

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-xl font-bold">
                    My E-Commerce Store
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="text-gray-700 hover:text-blue-500">
                                Cart ({0})
                            </Link>
                        </li>
                        <li>
                            <Link href="/checkout" className="text-gray-700 hover:text-blue-500">
                                Checkout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;