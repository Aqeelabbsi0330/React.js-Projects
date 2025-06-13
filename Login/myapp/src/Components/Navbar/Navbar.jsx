import React, { useContext } from "react";
import Context from "../../Context/Context";
import "./Navbar.css";

export default function Navbar() {
  const { User } = useContext(Context);

  return (
    <div>
      <ul>
        {User ? (
          <li>
            wellcome {User.Username} and {User.Email}
          </li>
        ) : (
          <li> please Login</li>
        )}
      </ul>
    </div>
  );
}
