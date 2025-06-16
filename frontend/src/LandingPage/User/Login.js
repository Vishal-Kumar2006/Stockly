import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

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
    });
  };

  return (
    <div className="form_container m-5">
      <h2 className="h2 text-center m-3">Login Account</h2>
      <form onSubmit={handleSubmit} >
        <div className="text-center mx-auto d-block m-3">
          <label htmlFor="email" className="text-start h-2 col-7">
            Email
          </label>
          <input
            className="col-7"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>

        <div className="text-center mx-auto d-block m-3">
          <label htmlFor="password" className="text-start h-2 col-7">
            Password
          </label>
          <input
            className="col-7"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="row ">
          <div className="d-grid gap-2 col-3 mx-auto text-center ">
            <button
              type="submit"
              className="d-block row btn btn-primary m-5 text-center width-"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <span>
              Already have an account? <Link to={"/user/signup"}>Signup</Link>
            </span>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
