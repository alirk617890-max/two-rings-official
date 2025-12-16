import { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

interface AdminPanelProps {
  onExit: () => void;
}

export function AdminPanel({ onExit }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} onExit={onExit} />;
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} onExit={onExit} />;
}
