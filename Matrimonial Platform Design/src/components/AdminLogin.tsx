import { useState } from 'react';
import { Heart, Lock, User, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface AdminLoginProps {
  onLogin: () => void;
  onExit: () => void;
}

export function AdminLogin({ onLogin, onExit }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in real app, this would be secure backend authentication)
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onExit}
          className="mb-4 text-gray-600 hover:text-pink-600"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Site
        </Button>

        <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-3 rounded-lg inline-block mb-4">
              <Heart className="h-8 w-8 text-white fill-white" />
            </div>
            <h1 className="text-3xl text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Two Rings Official</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 border-pink-200 focus:ring-pink-500"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-pink-200 focus:ring-pink-500"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              Login to Admin Panel
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-100">
            <p className="text-sm text-gray-700 mb-2">Demo Credentials:</p>
            <p className="text-sm text-gray-600">Username: <span className="text-pink-600">admin</span></p>
            <p className="text-sm text-gray-600">Password: <span className="text-pink-600">admin123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
