import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
export default function TextForm(props) {
  const uppertext = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    toast.success('Converted to Uppercase');
  };
  const lowertext = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    toast.success('Converted to Lowercase');
  };
  const cleartext = () => {
    let newtext = "";
    setText(newtext);
    toast.success('Cleared');
  };
  const copytoclip = () => {
    navigator.clipboard.writeText(text);
    toast.success('Text Copied to Clipboard');
    document.getElementsByClassName("cp")[0].innerHTML = "Copied";
    setTimeout(() => {
      document.getElementsByClassName("cp")[0].innerHTML = "Copy Text";
    }, 1000);
  };
  const upperstext = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div className="container">
    <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
      <h1 className="text-center">
        <b>{props.heading}</b>
      </h1>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: `${props.mode === "dark" ? "#042743" : "white"}`,
            color:`${props.mode === "dark" ? "white" : "black"}`
          }}
          className="form-control"
          value={text}
          onChange={upperstext}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <div className="w-100 d-inline-flex p-2 justify-content-center">
        <button className="btn btn-primary" onClick={cleartext}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 cp" id="b1" onClick={copytoclip}>
          Copy
        </button>
        <button className="btn btn-primary " onClick={uppertext}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowertext}>
          Lowercase
        </button>
        
      </div>
      <h2 className="my-3 ">
      <strong>Your Text Summary</strong>
      </h2>
      <div className="mx-2 my-4">
        <h4>
          <strong>{text.length < 1 ? 0 : text.split(" ").length}</strong> Words
          <br/>
          <strong>{text.length}</strong> Characters
          <br/>
          <strong>{text.split('?').length - 1}</strong> Questions
          <br/>
          <strong>{text.split('!').length - 1}</strong> Exclamations
        </h4>
      </div>
      <h2 className="my-2">
        Preview
      </h2>
      <div className="mx-2">
        <h5>
          {text.length > 0 ? text : 'Nothing to preview!!'}
        </h5>
      </div>
      
        <Toaster position="top-center"/>
     
      
    </div>
    </div>
  );
}
