// Import useState hook from react
import { React,useState } from "react";
import './pass.css'

// Input Password Component
export default function Password() {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <input className="input-box" id="pasi" type={passwordShown ? "text" : "password"} placeholder="password" />
      <button onClick={togglePassword}></button>
    </div>
  );
}