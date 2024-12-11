import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign In</button>
                </form>

                <div className="mt-4 text-center">
                    <p>Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
