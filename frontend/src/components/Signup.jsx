import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard";

const Signup = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    sendData(formData);
  };

  const sendData = (formData) => {
    axios
      .post("http://localhost:3000/api/v1/user/signup", {
        username: formData.email,
        password: formData.password,
        firstName: formData.first_name,
        lastName: formData.last_name,
      })
      .then(() => {
        setSignupSuccess(true);
        toast.success("SignUp successful ! ");
      });
  };

  return (
    <div>
      {signupSuccess ? (
        <Dashboard />
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="lg:flex lg:min-h-screen lg: justify-center items-center">
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                  Welcome to PeyKarde🪙
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Dosto se Udhar mango maze se !
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      First Name
                    </label>

                    <input
                      onChange={handleInputChange}
                      type="text"
                      id="FirstName"
                      name="first_name"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Last Name
                    </label>

                    <input
                      onChange={handleInputChange}
                      type="text"
                      id="LastName"
                      name="last_name"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Email
                    </label>

                    <input
                      onChange={handleInputChange}
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Password
                    </label>

                    <input
                      onChange={handleInputChange}
                      type="password"
                      id="Password"
                      name="password"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    />
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                    >
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                      Already have an account?
                      <NavLink
                        to="/signin"
                        className="text-gray-700 underline dark:text-gray-200"
                      >
                        Log in
                      </NavLink>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      )}
    </div>
  );
};

export default Signup;
