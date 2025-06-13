import React, { useCallback, useContext, useEffect } from "react";
import Context from "../Context/Context";

export default function Theme() {
  const { isDark, setisDark } = useContext(Context);
  const Styles = {
    color: isDark ? "#fff" : "#000",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0px auto",
    fontSize: "30px",
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#222" : "#fff";
  }, [isDark]);

  return (
    <div>
      <div className="header" style={Styles}>
        <div className="title">Theme Changer</div>
        <div className="btn">
          <label htmlFor="dark">
            <input
              type="checkbox"
              id="dark"
              checked={isDark}
              onChange={() => setisDark(!isDark)}
            />
            <span>Dark Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
}
