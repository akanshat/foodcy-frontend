import React, { useState } from "react";
import "../login/login.css";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import config from "../../config";
import sidebg from "../../assets/sidebg.jpg";
import Loading from "../loading/loading";

const Register = () => {
  const { token } = useAuth();
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const [errmsg, setErrmsg] = useState("");
  const { backendURL } = config;

  const handleSubmit = async () => {
    setLoading(true);
    if (inputs.email === "" || inputs.password === "" || inputs.name === "") {
      setLoading(false);
      setErrmsg("Details are invalid, try again !!!");
    }
    const { message: msg } = await fetch(`${backendURL}/api/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    }).then((response) => response.json());
    setLoading(false);
    setMessage(msg);
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  if (token) return <Redirect to="/dashboard" />;
  return (
    <div className="homepage-container">
      {/* <div className="homepage-heading">Wondering where to eat ?</div>
        <div className="homepage-text">Foodcy knows what you'll like.
        </div> */}
      <div className="left-home">
        <div className="form-container">
          {loading ? (
            <Loading />
          ) : (
            <>
              {message && <p>{message}</p>}
              <input
                className="text-input"
                type="text"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleInput}
              />

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
                className="login-submit"
                type="submit"
                onClick={handleSubmit}
              >
                REGISTER
              </button>
              <p className="register-text">Already have an account?</p>
              <Link className="register-link" to="/">
                Login
              </Link>

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

export default Register;
