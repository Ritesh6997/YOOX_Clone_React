import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { store } from '../../redux/store';
export default function ProtectedRoutes({ children }) {
  const isAuth = useSelector(store=>store.isAuth.IsAuth)
  if (!isAuth) return <Navigate to="/" replace={true} />;
  return children;
}


