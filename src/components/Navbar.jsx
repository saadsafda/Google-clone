import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/google-img.png";
import { Search } from "./Search";

export default function Navbar({ setDarkTheme, darkTheme }) {
  return (
    <>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
        <div className="flex justify-between items-center space-x-5 w-screen ">
          <Link to="/">
            <p className="">
              <img src={GoogleLogo} alt="Google" className="h-10 pb-2" />
            </p>
          </Link>
          <button
            type="button"
            onClick={() => setDarkTheme(!darkTheme)}
            className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
          >
            {darkTheme ? "Light 💡" : "Dark 🌙"}
          </button>
        </div>
        <Search />
      </div>
    </>
  );
}
