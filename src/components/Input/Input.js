import React, { forwardRef, useState } from "react";
// import './input.css'
const Inputs = forwardRef((props, ref) => {
  const {
    labelText = "input",
    className,
    error,
    width = 80,
    ...restProps
  } = props;

  return (
    <>
      <div className={`${className} ${error && "animate-shake"} `}>
        <label className="relative cursor-text">
          <input
            {...restProps}
            ref={ref}
            type="text"
            placeholder="Input"
            className={`h-12 w-${width} px-4 text-base text-black bg-white border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition-all duration-100 placeholder-opacity-0 `}
          />
          <span className="text-base text-black text-opacity-80 bg-white absolute left-5 mt-3 px-1 transition-all duration-100 input-text">
            {labelText}
          </span>
        </label>
        {error && (
          <p
            className={`${error && "animate-shake"} text-red-500 text-xs mt-1`}
          >
            {error}
          </p>
        )}
      </div>
    </>
  );
});

export default Inputs;
