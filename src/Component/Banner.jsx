import React from "react";
import logo from './banner.jpg'

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-3 ">
        <div className="flex flex-col md:flex-row  ">
          <div className=" w-full md:w-1/2 space-y-10 ml-4  order-2 md:order-1">
            <h1 className="font-bold text-3xl ">
              Grab Your Green Goodness at{" "}
              <span className="text-pink-600 "> Unbeatable Prices</span>
            </h1>
            <p className="font-bold text-1xl">
              Nutrient-rich green treasure, Boosts vitality for all creatures,
              Versatile feed, human fare, Experience its healthful flair!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary">Submit</button>
          </div>
          <div className=" w-full md:w-1/2 ml-4 md:order-1 hover:scale-75 ">
          <img src={logo} className="bg-no-repeat  h-45 w-full md:w-80  md:m-auto rounded" alt="" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
