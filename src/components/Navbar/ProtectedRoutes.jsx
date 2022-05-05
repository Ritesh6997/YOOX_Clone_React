import React from 'react'
import { Navigate } from "react-router-dom";
export default function ProtectedRoutes({ children }) {
  const isAuth = true;
  if (!isAuth) return <Navigate to="/" replace={true} />;
  return children;
}


