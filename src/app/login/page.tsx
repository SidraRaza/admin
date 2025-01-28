'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate authentication check for admin login
    if (username === 'Sidra' && password === '1234') {
      // Set cookie for login status (adminLoggedIn)
      document.cookie = "adminLoggedIn=true; path=/";  // Cookie is accessible throughout the site
      
      // Redirect to the dashboard
      router.push('/dashbord');
    } else {
      setErrorMessage('Incorrect credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border rounded-md shadow-lg">
        <h1 className="text-xl font-semibold text-center mb-6">Admin Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter admin username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter password"
          />
        </div>
        
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;