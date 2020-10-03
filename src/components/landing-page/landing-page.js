import React, { useState } from "react";
import "./landing-page.css";
import { useAuth } from "../../contexts/auth";
import { Link, Redirect } from "react-router-dom";
import config from "../../config";
import sidebg from "../../assets/sidebg.jpg";

const HomePage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState("");

  const { backendURL } = config;
  const { token, setToken } = useAuth();

  if (token) return <Redirect to="/dashboard" />;

  const handleSubmit = async () => {
    setLoading(true);
    if (inputs.email === "" || inputs.password === "") {
      setErrmsg("Invalid Email or Password");
      setLoading(false);
      return <Redirect to="/login" />;
    }
    const { token: fetchToken } = await fetch(`${backendURL}/api/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    }).then((response) => response.json());
    if (!fetchToken) {
      setErrmsg("Invalid Email or Password");
      setLoading(false);
      return <Redirect to="/login" />;
    }
    setLoading(false);
    localStorage.setItem("token", fetchToken);
    setToken(fetchToken);
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="homepage-container">
      {/* <div className="homepage-heading">Wondering where to eat ?</div>
        <div className="homepage-text">Foodcy knows what you'll like.
        </div> */}
      <div className="left-home">
        <div className="form-container">
          {loading ? (
            <h1>loading...</h1>
          ) : (
            <>
              <input
                className="text-input"
                type="email"
                name="email"
                placeholder="Email"
                value={inputs.email}
                onChange={handleInput}
              />

              <input
                className="text-input"
                type="password"
                name="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleInput}
              />

              <button
                onClick={handleSubmit}
                className="login-submit"
                type="submit"
              >
                LOGIN
              </button>
              <p>
                Don't have an account yet? <Link to="/register">Register</Link>
              </p>
              {errmsg ? <p className="errormsg">{errmsg}</p> : <></>}
            </>
          )}
        </div>
      </div>
      <div className="right-home">
        <img className="right-image" src={sidebg} alt="bg" />
      </div>
    </div>
  );
};

export default HomePage;
