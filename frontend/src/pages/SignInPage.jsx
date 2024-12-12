import React from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../Configure /Firebaseconfique";
import { signInWithPopup } from "firebase/auth";

const SignInPage = () => {
  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}!`);
      // You can save user details to your database here if needed
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Failed to log in with Google.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-400">
      {/* Form Container */}
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-2 text-center">Start your journey</h2>
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

        {/* Sign-In Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500">or sign in with</div>

        {/* Social Logins */}
        <div className="flex justify-center space-x-4">
          <button
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handleGoogleLogin}>
            <img
              src="/assets/google_icon.png"
              alt="Google"
              className="h-6 w-6"
            />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;