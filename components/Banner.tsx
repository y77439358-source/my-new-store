import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-64 bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-white bg-black bg-opacity-50 p-4">
                    Welcome to Our Online Store
                </h1>
            </div>
            <img 
                src="/images/banner.jpg" 
                alt="Promotional Banner" 
                className="object-cover w-full h-full opacity-50" 
            />
        </div>
    );
};

export default Banner;