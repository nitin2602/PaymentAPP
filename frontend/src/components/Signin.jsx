import React, { useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { toast } from "react-toastify";
import Signup from './Signup';
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(formData);
    console.log("Form submitted:", formData);
  };

  const [token, settoken] = useState("")
  const sendData = (formData) => {
    axios
      .post("http://localhost:3000/api/v1/user/signin", {
        username: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res.data.token)
        settoken(res.data.token);
        setIsAuthenticated(true);
        toast.success("Signin successful ! ");
      });
  };
  return (
    <>
      {isAuthenticated ? (
        <Dashboard token={token} />
      ) : (
        <section className="flex justify-center items-center h-screen bg-gray-900">
          <div className="max-w-md w-full bg-gray-900 rounded  space-y-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">Sign in </h2>
            </div>
            <form
              className=" gap-10 flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div className=" m-2">
                <input
                  onChange={handleInputChange}
                  className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className=" m-2">
                <input
                  onChange={handleInputChange}
                  className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className=" m-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center">
                <NavLink className=" text-white  underline" to="/Signup">
                  Signup
                </NavLink>
              </div>
              <div>
                <a className="text-sm text-blue-600 hover:underline" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Signin;
