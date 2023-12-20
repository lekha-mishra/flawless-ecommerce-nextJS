import { LinkIcon } from "@heroicons/react/24/solid";
import React from "react";

const ShareBtn = () => {
  return (
    <>
      <button className="inline-block mr-2 text-gray-500 text-sm font-bold hover:cursor-pointer hover:text-blue-400">
        <LinkIcon className="inline-block w-5 h-5" />
        Share link
      </button>
    </>
  );
};
export default ShareBtn;
