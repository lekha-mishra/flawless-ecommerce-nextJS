import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const contact = () => {
  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-center my-10 text-4xl font-['Consolas']">
        How can we help you ?
      </h1>
      <div className="md:grid grid-cols-2 gap-x-5">
        <div className=" flex justify-center bg-gray-50 m-5 md:m-0 md:ml-[20px] 2xl:ml-80 rounded-md shadow-md p-5 ">
          <div className="p-5 lg:p-10">
            <div className="text-2xl font-serif">Get in touch with us</div>
            <div className="flex items-center gap-2 my-10">
              <IoIosMail style={{ width: 20, height: 20, fill: "#0203cb" }} />
              <p className="hover:text-blue-700 text-md lg:text-lg font-sans">
                connect@flawless.com
              </p>
            </div>
            <div className="flex items-center gap-2 my-10">
              <IoCall style={{ width: 20, height: 20, fill: "#0203cb" }} />
              <p className="hover:text-blue-700 lg:text-lg font-sans">
                (215)112-4023
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationSharp
                style={{ width: 20, height: 20, fill: "#0203cb" }}
              />
              <p className="hover:text-blue-700 lg:text-lg font-sans">
                3 West Street San Francisco, CA 94109
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md 2xl:mr-80  p-5 lg:p-10 rounded-md mx-5 2xl:mx-0 ">
          <div className=" ">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="given-name"
                  className="block w-full bg-gray-50 py-1.5  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="my-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full bg-gray-50  py-1.5  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="my-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full  bg-gray-50 py-1.5   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="my-5">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full bg-gray-50   sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <button className="px-8 py-3 text-lg  mt-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md ">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
