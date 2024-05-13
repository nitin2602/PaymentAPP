import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-white text-3xl font-extrabold  sm:text-7xl">
              PeyKarde 🪙
            </h1>

            <p className=" italic mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Payment karo maze se !
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/signup"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
