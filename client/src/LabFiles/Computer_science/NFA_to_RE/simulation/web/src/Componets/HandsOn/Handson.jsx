import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HansonSvg from "./HansonSvg";
import "./Handson.css";
import Handoson2 from "./Handoson2";
import Handson3 from "./Handson3";
import Handson4 from "./Handson4";
import Handson0 from "./handson0";
import Button from '@mui/material/Button';
const Handson = () => {
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [showCircle, setShowCircle] = useState(false);
  const [showAns, setShowAns] = useState(false);
  const [showAns2, setShowAns2] = useState(false);
  const [showAns3, setShowAns3] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionSuccess2, setSubmissionSuccess2] = useState(false);
  const [submissionSuccess3, setSubmissionSuccess3] = useState(false);
  const [submissionSuccess4, setSubmissionSuccess4] = useState(false);

  const [handson2XValue, setHandson2XValue] = useState("");
  const [handson3XValue, setHandson3XValue] = useState("");

  const [handson4XValue, setHandson4XValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (xValue === "a" && yValue === "b") {
      setShowCircle(true);
      setErrorMessage("");
      setSubmissionSuccess(true);
    } else {
      setErrorMessage("Incorrect input values.");
      setSubmissionSuccess(false);
    }
  };

  const handleHandson2Submit = (event) => {
    event.preventDefault();

    if (handson2XValue === "a*b" ) {
      setSubmissionSuccess2(true);
      setShowAns(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect input values for Handson2.");
      setSubmissionSuccess2(false);
    }
  };

  const handleHandson3Submit = (event) => {
    event.preventDefault();

    if (handson3XValue === "a" ) {
      setShowAns2(true);
      setSubmissionSuccess3(true);
    } else {
      setErrorMessage("Incorrect input values for Handson3.");
      setSubmissionSuccess2(false);
    }
  };

  const handleHandson4Submit = (event) => {
    event.preventDefault();

    if (handson4XValue === "a*b") {
      setShowAns3(true);
      setSubmissionSuccess4(true);
    } else {
      setErrorMessage("Incorrect input values for Handson4.");
      setSubmissionSuccess4(false);
    }
  };

  return (
    <div>
     
      <div className="row" style={{ backgroundColor: "#252424" }}>
      <div className="col-md-3" style={{padding:'40px',backgroundColor:'grey',height:'130vh'}}> 
      <h4 style={{color:'white'}}>Problem</h4>
      <Handson0></Handson0>
      <p style={{color:'white',alignItems:'flex-start'}}>solve this using state elimation method</p>
      <h4 style={{ color: "white", marginTop: "20px"}}>Steps</h4>
      <p style={{color:'white',alignItems:'flex-start'}}>Step1: Fill the value of x and y in the input filed given</p>
      {submissionSuccess && (
      <p style={{color:'white',alignItems:'flex-start'}}>Step2: Fill the value of x  in the input filed given</p>
      )}
      {submissionSuccess2 && (
      <p style={{color:'white',alignItems:'flex-start'}}>Step3: Fill the value of x  in the input filed given</p>
      )}
      {submissionSuccess3 && (
      <p style={{color:'white',alignItems:'flex-start'}}>Step4: Fill the value of x  in the input filed given</p>
      )}
        {submissionSuccess4 && (
      <p style={{color:'white',alignItems:'flex-start'}}>Step5: Fill the value of x  in the input filed given</p>
      )}
      
      </div>

        <div className="col-md-6">
        <center> 
         
        <h2 style={{ color: "white", marginTop: "20px"}}>Exercise</h2>
         <HansonSvg showCircle={showCircle} />
         {submissionSuccess && <Handoson2 showAns={showAns} />}
         {submissionSuccess2 && <Handson3 showAns2={showAns2} />}
         {submissionSuccess3 && <Handson4 showAns3={showAns3} />}</center>
        
       
        
        </div>
        <div className="col-md-3 form-container" style={{height:'130vh'}}>
        <Link to="/"> {/* Add this Link */}
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',color:'green'}}><Button style={{backgroundColor:"green"}}variant='contained' >Back</Button></div>
          
        </Link>
       
          <h4 className="heading">Steps</h4>
          <h5>Step 1</h5>
          <div className="input-container">
            <label htmlFor="xInput">x=</label>
            <input
              id="xInput"
              type="text"
              value={xValue}
              onChange={(e) => setXValue(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="yInput">y=</label>
            <input
              id="yInput"
              type="text"
              value={yValue}
              onChange={(e) => setYValue(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {submissionSuccess && (
            <div>
              <h5>Step 2</h5>
              <div className="input-container">
                <label htmlFor="handson2XInput">x=</label>
                <input
                  id="handson2XInput"
                  type="text"
                  value={handson2XValue}
                  onChange={(e) => setHandson2XValue(e.target.value)}
                />
              </div>
              {/* <div className="input-container">
                <label htmlFor="handson2YInput">y=</label>
                <input
                  id="handson2YInput"
                  type="text"
                  value={handson2YValue}
                  onChange={(e) => setHandson2YValue(e.target.value)}
                />
              </div> */}
              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
              <button
                className="submit-button"
                type="submit"
                onClick={handleHandson2Submit}
              >
                Submit
              </button>
            </div>
          )}

          {submissionSuccess2 && (
            <div>
              <h5>Step 3</h5>
              <div className="input-container">
                <label htmlFor="handson3XInput">x=</label>
                <input
                  id="handson3XInput"
                  type="text"
                  value={handson3XValue}
                  onChange={(e) => setHandson3XValue(e.target.value)}
                />
              </div>
             
              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
              <button
                className="submit-button"
                type="submit"
                onClick={handleHandson3Submit}
              >
                Submit
              </button>
            </div>
          )}

          {submissionSuccess3 && (
            <div>
              <h5>Step 4</h5>
              <div className="input-container">
                <label htmlFor="handson4XInput">x=</label>
                <input
                  id="handson4XInput"
                  type="text"
                  value={handson4XValue}
                  onChange={(e) => setHandson4XValue(e.target.value)}
                />
              </div>
              {/* <div className="input-container">
                <label htmlFor="handson4YInput">y=</label>
                <input
                  id="handson4YInput"
                  type="text"
                  value={handson4YValue}
                  onChange={(e) => setHandson4YValue(e.target.value)}
                />
              </div> */}
              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
              <button
                className="submit-button"
                type="submit"
                onClick={handleHandson4Submit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Handson;
