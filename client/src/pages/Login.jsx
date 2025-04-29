import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left: Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-[#D7B65D]">Welcome Back</h2>
          <p className="text-gray-400">Login to continue your journey</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-[#111] border border-[#D7B65D] rounded-md text-white focus:outline-none"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 bg-[#111] border border-[#D7B65D] rounded-md text-white focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D7B65D] hover:bg-white text-black py-3 rounded-md font-semibold"
            >
              Login
            </button>
          </form>


          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <p>
              Don’t have an account?{' '}
              <Link to="/register" className="text-[#D7B65D] hover:underline">
                Sign up
              </Link>
            </p>
            <Link to="#" className="hover:underline">Forgot Password?</Link>
          </div>
        </div>
      </div>

      {/* Right: Image Section */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/login-bg.jpg')` }} // Replace with your desired image
      ></div>
    </div>
  );
};

export default Login;
