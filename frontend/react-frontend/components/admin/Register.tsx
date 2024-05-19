"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Register } from "../../api/api";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const usernameField = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const passwordField = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const confirmPasswordField = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    const emailField = document.getElementById("email") as HTMLInputElement;
    const nameField = document.getElementById("name") as HTMLInputElement;

    setUsername(username);
    setPassword(password);
    setConfirmPassword(confirmPassword);
    setEmail(email);
    setName(name);

    if (!passwordsMatch) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await Register(username, password, email, name, false);
      console.log(`Registration data posted successfully: ${response}`);

      usernameField.value = "";
      passwordField.value = "";
      confirmPasswordField.value = "";
      emailField.value = "";
      nameField.value = "";
      username && setUsername("");
      password && setPassword("");
      confirmPassword && setConfirmPassword("");
      email && setEmail("");
      name && setName("");

      // handle successful response here
    } catch (error) {
      console.error(`Error posting registration data: ${error}`);
      // handle error here
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-100 p-12 rounded-xl border  shadow-md ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Registration
          </h2>
        </div>
        <form className="  m-8 p-2" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm ">
            <div className="m-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className="m-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="m-4">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                  !passwordsMatch ? "border-red-500" : ""
                }`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!passwordsMatch && (
                <p className="text-red-500">Passwords do not match</p>
              )}
            </div>
            <div className="m-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className="m-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="m-4 p-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-md w-full m-10 flex text-start  text-black bg-gray-100 p-12 rounded-xl border  shadow-md space-y-8">
        {" "}
        <p className="flex">Already have an account?</p>
        <p className="text-blue-500 flex ">
          <Link href={"admin/login"}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
