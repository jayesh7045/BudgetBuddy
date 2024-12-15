import React from "react";
import axios from "axios";
import { useState } from "react";

function Signup({ hasAccount, createAccount, value}) {
  
  const [RegistrationValue, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password : ""
  });

  const handleChange = (e) => {
    setValue({ ...RegistrationValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
  };
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Welcome Buddy
          </a>
          <div class="w-full  bg-slate-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Create and account
              </h1>
              <div>
                <div  class = "mt-4">
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your Username
                  </label>
                  <input
                    value={RegistrationValue.username}
                    onChange={handleChange}
                    type="username"
                    name="username"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div class = "mt-4">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={RegistrationValue.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div class = "mt-4">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={RegistrationValue.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div  class = "mt-4">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                   Confirm Password
                  </label>
                  <input
                    value={RegistrationValue.confirm_password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  class="w-full mt-4 text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 pb-[0.6rem] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-200 dark:text-gray-400 pt-[0.6rem]">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <button
                      onClick={() => {
                        createAccount(true);
                        
                      }}
                    >
                      Login here
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
