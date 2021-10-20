import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-end items-center mt-4 w-96 ">
    {links.map(({ url, text }, index) => (
      <div key={index}>
        <NavLink
          to={url}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      </div>
    ))}
  </div>
);
