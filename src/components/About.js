import React from 'react'

export default function About(props) {
    return (
      <div className="container " >
      <div className="about-section" style={{
            backgroundColor: `${props.mode === "dark" ? "#042743" : "white"}`,
            color:`${props.mode === "dark" ? "white" : "black"}`
          }}>
      <h1 className="my-3">About TextUtils</h1>
      <p>
        <b>TextUtils</b> is a ReactJs website built primarily to do various
        operations on regular typed text. You can safely use WordPad or NotePad
        for text drafting, and saving, but <i>TextUtils</i> offers much more
        than simple text drafting and formatting. TextUtils can convert your
        text to any case in just one simple click of a button. The best part of <i>TextUtils</i> is that it is an
        open source project, as a result, dozens of new features are in the
        upcoming, which definitely makes it a cut above the rest. <br />
        The most eminent features of the website are as follows :
      </p>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is a <i>Simple Text Analyzer</i> , which mutilates your text,
              but in a tender way
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is completely <i>free</i> to use. No credit cards required. Use
              as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is compatible with all of your <i>favorite</i> browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

