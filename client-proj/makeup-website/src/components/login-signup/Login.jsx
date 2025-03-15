import React, { useState } from "react";
import { supabase } from "../../supabaseClient"; // Ensure you import the Supabase client

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle the login process
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    try {
      const { error, user } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("User logged in:", user);
        // Perform any post-login actions (e.g., redirecting the user)
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {" "}
        {/* Form submit triggers handleLogin */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state as the user types
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state as the user types
            required
          />
        </div>
        <button type="submit">Login</button> {/* Calls handleLogin on click */}
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
