import React, { useContext } from "react";
import Context from "../../Context/Context";

export default function Dashboard() {
  const { User } = useContext(Context);
  return <div>{User && <h1>Welcome {User.Username}</h1>}</div>;
}
