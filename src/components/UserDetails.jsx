import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export default function UserDetails() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="container mx-auto">
        <p>UserDetails</p>

        {user ? (
          <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="rounded-xl w-16"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Welcome to{" "}
                  <span className="text-2xl">{user.displayName}!</span>
                </h2>
                <p className="text-xl">{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Please login</h2>
        )}
      </div>
    </>
  );
}
