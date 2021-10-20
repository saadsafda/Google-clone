import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";
import moment from "moment";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
    // eslint-disable-next-line
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="md:px-48 space-y-6">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 40 ? link.substring(0, 40) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
                <p className="text-sm text-gray-600 ">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <>
          <div className="flex flex-wrap justify-center items-center">
            {results?.map(({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                  className="w-48	h-48 rounded-2xl	"
                />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            ))}
          </div>
        </>
      );
    case "/news":
      return (
        <>
          <div className="sm:px-56 space-y-6">
            {results?.map(({ image, id, links, source, title, published }) => (
              <>
                <div
                  key={id}
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
                >
                  <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5  ">
                    <div className="min-w-0 flex-auto space-y-0.5">
                      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
                        <a
                          href={source?.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-blue-600"
                        >
                          {source?.title}
                        </a>
                      </p>
                      <h2 className="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate break-words ">
                        <a
                          href={links?.[0].href}
                          target="_blank"
                          rel="noreferrer "
                          className="hover:text-blue-600"
                        >
                          {title}
                        </a>
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-lg lg:text-xs xl:text-xs font-medium">
                        {moment({ published }).calendar()}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      );
    case "/videos":
      return (
        <>
          <div className="">
            <div className="sm:px-56 space-y-6 ">
              {results.map((video, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
                >
                  <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5  ">
                    <div className="rounded-lg bg-gray-900 p-2">
                      <ReactPlayer
                        url={video.link}
                        controls
                        width="100px"
                        height="50px"
                      />
                    </div>
                    <div className="min-w-0 flex-auto space-y-0.5">
                      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
                        <a
                          href={video.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-blue-600"
                        >
                          {video.title}
                        </a>
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-lg lg:text-xs xl:text-xs font-medium">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    default:
      return "Error...";
  }
};
