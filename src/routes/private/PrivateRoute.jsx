import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}
