import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" />;
  }

  // If a specific role is required, check user's role
  if (requiredRole && user.user_metadata.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}