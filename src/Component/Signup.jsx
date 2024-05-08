import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {
  return (
    <>
      <div className="container h-screen  flex justify-center items-center">
        <div className="modal-box">
          <form method="">
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">SignUp</h3>
          <div className="space-y-1">
            <label htmlFor="" className=" font-bold">
              Name
            </label>
            <div className="">
              <input
                type="text"
                placeholder="Enter name"
                className="ps-2 py-2 outline-none rounded w-3/4"
              />
            </div>
            <label htmlFor="" className=" font-bold">
              Email
            </label>
            <div className="">
              <input
                type="email"
                placeholder="Enter mail"
                className="ps-2 py-2 outline-none rounded w-3/4"
              />
            </div>
            <label htmlFor="" className=" font-bold">
              Password
            </label>
            <div className="">
              <input
                type="password"
                placeholder="Enter Password"
                className="ps-2 py-2 outline-none rounded w-3/4"
              />
            </div>
          </div>
          
          <div className="w-3/4 flex justify-between mt-2 space-y-2">
            <button className="rounded bg-pink-700  p-2 mt-1 hover:bg-purple-800 duration-200">
              SignUp
            </button>
            <p>
              Have an Account!{" "}
              <span className="underline text-blue-500">
                <button onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>{" "}
                <Login/>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
