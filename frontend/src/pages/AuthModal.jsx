// src/components/AuthModal.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ open, onClose, redirectTo = '/courses' }) => {
  const { login, signup } = useAuth();
  const [tab, setTab] = useState('login'); // 'login' or 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // form state
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  if (!open) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // your context.login(email, password) is expected to return user/token or throw
     await login(loginData.email, loginData.password);
setLoading(false);
onClose?.();

// 🔥 HANDLE STRIPE / EXTERNAL REDIRECT
if (redirectTo && redirectTo.startsWith("http")) {
  window.location.href = redirectTo; // SAME TAB (recommended for Stripe)
} else {
  navigate(redirectTo || "/courses", { replace: true });
}

    } catch (err) {
      setLoading(false);
      setError(err?.message || 'Login failed');
    }
  };

const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    await signup(signupData.name, signupData.email, signupData.password);
    setLoading(false);
    onClose?.();

    // 🔥 SAME REDIRECT LOGIC AS LOGIN
    if (redirectTo && redirectTo.startsWith("http")) {
      window.location.href = redirectTo;
    } else {
      navigate(redirectTo || "/courses", { replace: true });
    }

  } catch (err) {
    setLoading(false);
    setError(err?.message || "Signup failed");
  }
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{tab === 'login' ? 'Login' : 'Create account'}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Close</button>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 py-2 rounded ${tab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded ${tab === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setTab('signup')}
          >
            Sign up
          </button>
        </div>

        {error && <div className="text-red-600 mb-3">{error}</div>}

        {tab === 'login' ? (
          <form onSubmit={handleLogin}>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              value={loginData.email}
              onChange={e => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full border rounded p-2 mb-3"
            />
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              value={loginData.password}
              onChange={e => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full border rounded p-2 mb-4"
            />
            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
                {loading ? 'Logging...' : 'Login & Continue'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <label className="block text-sm text-gray-600">Full name</label>
            <input
              type="text"
              required
              value={signupData.name}
              onChange={e => setSignupData({ ...signupData, name: e.target.value })}
              className="w-full border rounded p-2 mb-3"
            />
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              value={signupData.email}
              onChange={e => setSignupData({ ...signupData, email: e.target.value })}
              className="w-full border rounded p-2 mb-3"
            />
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              value={signupData.password}
              onChange={e => setSignupData({ ...signupData, password: e.target.value })}
              className="w-full border rounded p-2 mb-4"
            />
            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
                {loading ? 'Creating...' : 'Create account & Continue'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
