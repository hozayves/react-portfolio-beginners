import React, { useContext } from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import "./Toggle.css";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  console.log("Toggle", { darkMode });
  return (
    <div className="toggle" onClick={() => theme.dispatch({ type: "toggle" })}>
      <Sun />
      <Moon />
      <div
        className="t-button"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};
export default Toggle;
