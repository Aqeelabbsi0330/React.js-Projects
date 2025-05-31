import React from "react";
import { useState, useContext } from "react";
import UserContext from "./../Context/UserContext";

export default function Profile() {
  const { User } = useContext(UserContext);

  if (!User) return <div>Please Login</div>;
  return <div>Welcome {User.Username}</div>;
}
