import React from "react";
import { useState } from "react";

export default function Body(props) {
  const [data, set_data] = useState("");
  const handlechange = (e) => {
    set_data(e.target.value);
    console.log("onchange working");
  };
  const handleUpercase = () => {
    let upcase = data.toUpperCase();
    set_data(upcase);
    props.showalert("Text Converted to UpperCase" , "success");

  };
  const handleLowercase = () => {
    let lowercase = data.toLowerCase();
    set_data(lowercase);
    props.showalert("Text Converted to LowerCase" , "success");
  };
  const handleClear = () => {
    let clear = "";
    set_data(clear);
    props.showalert("Text should be Clear" , "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("one");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text should be Copied To ClipBoard" , "success");
  };
  const handleExtraspace = () => {
    let newtext = data.split(/[ ]+/);
    set_data(newtext.join(" "));
    props.showalert("ExtraSpace Should Be Remove" , "success");
  };

  return (
    <div>
      <div className="lg:text-3xl text-xl font-semibold ml-6 lg:ml-28 mt-6">
        <h1>{props.heading}</h1>
      </div>
      <div>
        <textarea
          className="h-[100%] focus:outline-blue-400 w-[80%] ml-6 lg:ml-28 border mt-6 border-black"
          style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" }}
          name="text"
          value={data}
          id="one"
          cols="30"
          rows="6"
          onChange={handlechange}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="btn bg-blue-600 ml-6 lg:ml-28 mt-4 btn-primary"
          onClick={handleUpercase}
        >
          Convert To UpperCase
        </button>
        <button
          type="button"
          className="btn bg-blue-600 mt-4 lg:ml-3 ml-1  btn-primary"
          onClick={handleLowercase}
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          className="btn bg-blue-600 mt-4 lg:ml-3 ml-1 btn-primary"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn bg-blue-600 mt-4 ml-6 lg:ml-3  btn-primary"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn bg-blue-600 ml-1 mt-4 lg:ml-3  btn-primary"
          onClick={handleExtraspace}
        >
          Extra Removing Space
        </button>
      </div>
      <div className="">
        <h1 className="text-4xl font-semibold ml-6 md:ml-28 mt-6">
          Your Text Summery
        </h1>
        <h1 className="md:ml-28 ml-6 mt-1 text-xl">
          {/* {data.split(" ").length} Word {data.length} Characters */}
          {data.length > 0 ? data.trim().split(" ").length : 0} Word{" "}
          {data.length} Characters
        </h1>
        <h1 className="md:ml-28 ml-6 mt- text-xl">
          {0.08 * data.split(" ").length} Minutes To Read Words
        </h1>
      </div>
      <div>
        <h1 className="md:ml-28 ml-6 mt-2 text-4xl font-semibold">
          Preview Summery
        </h1>
        <h1 className="md:ml-28 ml-6 mt-2 font-semibold font-xl">
          {data.length > 0
            ? data
            : "Enter something in the above TextArea that preview Here"}
        </h1>
      </div>
    </div>
  );
}
