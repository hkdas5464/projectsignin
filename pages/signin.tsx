import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Signin: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Sign in successful!');
        // Store login flag and name in localStorage; fallback to email if no name is returned
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('name', data.name || email);
        // Redirect to the dashboard page
        router.push('/dashboard');
      } else {
        setMessage(data.error || 'Sign in failed');
      }
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | Aceternity</title>
      </Head>
      {/* Outer container with dark background */}
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Welcome back to Aceternity</h1>
          <p className="text-gray-400 mb-6">
            Sign in if you already have an account. Otherwise, create one now!
          </p>

          {/* Signin Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black border border-gray-800 rounded-lg p-6 space-y-4"
          >
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="projectmayhem@fc.com"
                className="w-full bg-gray-900 text-white border border-gray-700 
                           rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full bg-gray-900 text-white border border-gray-700 
                           rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white 
                         font-semibold py-2 rounded-md mt-2 transition-colors"
            >
              Sign in &rarr;
            </button>

            {/* Sign up redirect button */}
            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white 
                         font-semibold py-2 rounded-md mt-2 transition-colors"
            >
              Don&apos;t have an account? Sign Up
            </button>

            {/* Display success or error message */}
            {message && (
              <p className="text-center text-red-400 mt-4">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
