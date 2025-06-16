import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      console.log(data);

      const { success, message } = data;
      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <h2 className="h2 text-center m-3">Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-center mx-auto d-block m-3">
          <label htmlFor="email" className="text-start h-2 col-7">
            Email
          </label>
          <input
            className="mx-auto d-block col-7"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="text-center mx-auto d-block m-3">
          <label htmlFor="email" className="text-start h-2 col-7">
            Username
          </label>
          <input
            className="mx-auto d-block col-7"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="text-center mx-auto d-block m-3">
          <label htmlFor="password" className="text-start h-2 col-7">
            Password
          </label>
          <input
            className="mx-auto d-block col-7"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="row text-center">
          <div className="d-grid gap-2 col-3 mx-auto text-center ">
            <button
              type="submit"
              className="d-block row btn btn-primary m-5 text-center width-"
            >
              Submit
            </button>
          </div>

          <span >
            Already have an account? <Link to={"/user/login"}>Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
