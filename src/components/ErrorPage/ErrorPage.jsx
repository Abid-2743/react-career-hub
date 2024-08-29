import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!!!</h2>
            <p className="text-lg text-gray-700 mb-4">The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
