import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to your account
          <p>username: admin password: admin123</p>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border 
                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border
                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border 
              border-transparent text-sm font-medium rounded-lg text-white 
              bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200
              transform hover:scale-105"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;