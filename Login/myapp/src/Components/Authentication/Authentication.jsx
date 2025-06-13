import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import "./Authentication.css";

export default function Authentication() {
  const { User, login, logout } = useContext(Context);
  const [Username, setUsername] = useState("null");
  const [Email, setEmail] = useState("null");
  const Submit = () => {
    login(Username, Email);
  };
  const Logout = () => {
    logout();
  };
  return (
    <div className="container">
      <label htmlFor="name">
        <span>Username</span>
        <input
          type="text "
          id="name"
          value={Username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor="mail">
        <span>Email</span>
        <input
          type="emial"
          id="mail"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      {User ? (
        <button onClick={Logout}>Logout</button>
      ) : (
        <button onClick={Submit}>Login</button>
      )}
    </div>
  );
}
