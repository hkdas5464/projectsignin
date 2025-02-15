import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [twitterPassword, setTwitterPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // In this example, we’ll combine first and last name for the "name" field:
    const fullName = `${firstName} ${lastName}`.trim();

    // Example call to your /api/signup route
    // (Adjust fields as needed in your backend)
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: fullName,
        email,
        password
        // If you also want to store the twitter password, add it here
        // twitterPassword
      })
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('User created successfully!');
      // Clear fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setTwitterPassword('');
      // Optionally, redirect to a different page (e.g., signin)
      // router.push('/signin');
    } else {
      setMessage(data.error);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      {/* Outer container with dark background */}
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
          <p className="text-gray-400 mb-6">
            Login if you can because we don&apos;t have a login flow yet
          </p>
          
          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black border border-gray-800 rounded-lg p-6 space-y-4"
          >
            {/* First and Last Name in a grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full bg-gray-900 text-white border border-gray-700 
                             rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-1">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-gray-900 text-white border border-gray-700 
                             rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
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
                placeholder="enter password"
                className="w-full bg-gray-900 text-white border border-gray-700 
                           rounded-md px-3 py-2 focus:outline-none focus:border-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Your Twitter Password */}
           

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white 
                         font-semibold py-2 rounded-md mt-2 transition-colors"
            >
              Sign up &rarr;
            </button>

            {/* Submit Button */}
            <button
  type="button"
  onClick={() => router.push('/signin')}
  className="w-full bg-gray-700 hover:bg-gray-600 text-white 
             font-semibold py-2 rounded-md mt-2 transition-colors"
>
  Already have an account? Sign In
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

export default Signup;



// a@gmail.com