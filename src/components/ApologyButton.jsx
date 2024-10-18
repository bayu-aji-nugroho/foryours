import React, { useState } from 'react';

const ApologyButton = ({ setEmotion }) => {
    const [forgiven, setForgiven] = useState(false);

    const handleClick = () => {
        setForgiven(true);
        setEmotion('happy');
    };

    return (
        <div className="text-center">
            {!forgiven ? (
                <button
                    className="mt-6 px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:bg-purple-700 focus:outline-none animate-pulse"
                    onClick={handleClick}
                >
                    Maafkan Aku dong ka, maaf banget, aku buat ini lama lo
                </button>
            ) : (
                <p className="mt-8 text-lg text-gray-700 transition-opacity duration-1000">
                    beneran, makasihhh banget 🥺, jangan berubah ya pleasee.
                </p>
            )}
        </div>
    );
};

export default ApologyButton;
