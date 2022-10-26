import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center h-screen justify-center ">
        <div className="w-52 h-52 border-t-4 border-b-4 border-sky-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
