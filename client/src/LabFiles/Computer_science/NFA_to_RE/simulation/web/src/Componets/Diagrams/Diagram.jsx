import React, { useState } from "react";
import Button from "@mui/material/Button";

import Step0 from "../../assets/step1.svg";
import Step1 from "../../assets/step2.svg";
import Step2 from "../../assets/step3.svg";
import Step3 from "../../assets/step5.svg";
import Step4 from "../../assets/step6.svg";
import Step20 from "../../assets/step20.svg";
import Step21 from "../../assets/step21.svg";
import Step22 from "../../assets/step22.svg";
import Step23 from "../../assets/step23.svg";
import Step24 from "../../assets/step24.svg";
import Basics from "../../assets/basics.svg";
import Rules from "../../assets/rules.svg";
import "./Diagram.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, Typography } from "@mui/material";
const stepData = {
  basics: ["Add your basic SVG explanation here."],
  example1: [
    "",
    "Initialized the start state 'S'  utilizing an epsilon transition(it allows transition without consuming any input)",
    "Initialized the Final state 'F'  utilizing an epsilon transition ",
    "After eliminating state A, we established a direct path from state S to state B and introduced a direct loop on state B with the value a.b = ab.",
  ],
  example2: [
    " ",
    "Initialized the FInal state 'F'  utilizing an epsilon transition",
    "After eliminating state B , we establish a direct path from state S to state F having value a.a*.∈ = aa* click step3 to eliminate state C",
    "After eliminating state C , we establish a direct path from  state S to state F having value b.a*.∈ = ba*",
  ],
};

export default function Diagram() {
  const [currentExample, setCurrentExample] = useState("example1");
  const [checkedValues, setCheckedValues] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [showBasics, setShowBasics] = useState(false);
  const [showThumbRule, setShowThumbRule] = useState(false);
  const [lastStepClicked, setLastStepClicked] = useState(false);
  const handleExampleClick1 = (example) => {
    setCheckedValues([]);
    setCurrentExample(example);
    setCurrentStep(0); // Reset currentStep to 0 when switching examples
    setShowBasics(false);
    setLastStepClicked(false);
  };

  // const handleExampleClick2 = (example) => {
  //   setCurrentExample(example);
  //   setCurrentStep(0); // Reset currentStep to 0 when switching examples
  //   setShowBasics(false);
  //   setLastStepClicked(false);
  // };
  const handleBasicsClick = () => {
    // setCurrentStep(0);
    setShowBasics(true);
    setLastStepClicked(false);
    setShowThumbRule(false);
    setShowBasics(!showBasics);
  };

  const handleThumbRuleClick = () => {
    setShowBasics(false);
    setShowThumbRule(true);
    setLastStepClicked(false);
    setShowThumbRule(!showThumbRule);
  };
  const stepLabelsExample1 = [
    "Initialization of Start state",
    "Initialization of Final state",
    "Eliminate Intermediate state A",
    "Final Minimization of NFA",
  ];

  const stepLabelsExample2 = [
    "Initialization of Final state",
    "Elimination of Intermediate state B",
    "Elimination of Intermediate state C",
    "Final Minimization of NFA",
  ];

  const stepLabels =
    currentExample === "example1" ? stepLabelsExample1 : stepLabelsExample2;

  const handleStepClick = (step) => {
    setCheckedValues([...checkedValues, step + 1]);
    setCurrentStep(step + 1);
    setShowBasics(false);
    if (step === stepData[currentExample].length - 1) {
      setLastStepClicked(true);
    } else {
      setLastStepClicked(false);
    }
  };
  const getCurrentStepSVG = () => {
    if (currentExample === "example1") {
      return [Step0, Step1, Step2, Step3, Step4][currentStep];
    } else if (currentExample === "example2") {
      return [Step20, Step21, Step22, Step23, Step24][currentStep];
    } else {
      return null;
    }
  };
  console.log(checkedValues, "hey");
  return (
    <div className="row">
      <div className="col-md-2" style={{ backgroundColor: "white" ,height:'100vh',overflow:'scroll'}}>
        <div className="steps" style={{ marginLeft: "20px", }}>
          {/* <h4>Operations</h4> */}

          <p style={{marginTop:'20px'}}>
            The following process is utilized in the conversion from a
            Nondeterministic Finite Automaton (NFA) to a regular expression.
          </p>
          <h6>{currentExample === "example1" ? "Conversion of NFA 1 to RE" : "Conversion of NFA 2 to RE"}</h6>

          <div>
            {stepData[currentExample].map((step, index) => {
              return (
                <div key={index} className="step">
                  {index === currentStep && <Typography>{step}</Typography>}
                  <FormControlLabel
                    style={{ marginTop: "30px",fontWeight:'600px' }}
                    control={
                      <Checkbox
                        onChange={() => handleStepClick(index)}
                        disabled={index > currentStep}
                        value={index}
                        checked={checkedValues.includes(index + 1)}
                      />
                    }
                    label={stepLabels[index]}
                  />
                </div>
              );
            })}
            {lastStepClicked && (
              <div>
                <Typography>
                  {currentExample === "example1"
                    ? "After eliminating state B, we put a direct path from state S to state F and introduced a direct loop on state B with the value a.b = ab.The Final Regular Expression =a(ba)*"
                    : "After adding the expressions, the final regular expression RE=aa* + ba*."}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="col-md-5"
        style={{ backgroundColor: "#252424", height: "100vh", padding: "40px" }}
      >
        <Button
          style={{ position: "static", margin: "20px" }}
          variant={currentExample === "example1" ? "contained" : "outlined"}
          onClick={() => handleExampleClick1("example1")}
        >
          NFA 1
        </Button>
        <Button
          style={{ position: "static", margin: "20px" }}
          variant={currentExample === "example2" ? "contained" : "outlined"}
          onClick={() => handleExampleClick1("example2")}
        >
          NFA 2
        </Button>
        <div>
          <>
            {/* <h4
                style={{
                  color: "white",
                  marginTop: "20px",
                  marginLeft: "60px",
                }}
              >
                Graphical Representation of NFA
              </h4> */}
          </>

          <img src={getCurrentStepSVG()} alt={`Step ${currentStep + 1}`} />
        </div>
      </div>

      <div className="col-md-5" style={{ backgroundColor: "#252424", height:'auto'}}>
      <div className="row">
      <div className="col-md-7"></div>
        <div className="col-md-5"style={{ marginTop: "20px",display:'flex',flexDirection:'column' }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              width:'50'
            }}
          >
            <div
              style={{
                width: "50px",
                height: "2px",
                backgroundColor: "#80003D",
              }}
            />
            <div style={{ color: "white", marginLeft: "10px" }}>
              Start State
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "50px",
                height: "2px",
                backgroundColor: "#378AD6",
              }}
            ></div>
            <div style={{ color: "white", marginLeft: "10px" }}>
              Final State
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ width: "50px", height: "2px", backgroundColor: "green" }}
            ></div>
            <div style={{ color: "white", marginLeft: "10px" }}>
              Intermediate State
            </div>
          </div>
        </div>
        </div>
          <div style={{display:'flex',justifyContent:'flex-end'}}>

          <Button
            style={{ margin: "10px 5px",color: "white"  }}
            variant={showBasics ? "contained" : "outlined"}
            onClick={handleBasicsClick}
          >
            Basic Operations
          </Button>
          <Button
            style={{ margin: "10px 5px" ,color: "white" }}
            variant={showThumbRule ? "contained" : "outlined"}
            onClick={handleThumbRuleClick}
          >
            Thumb Rule
          </Button>
          </div>
      <div style={{display:'flex',justifyContent:'flex-end'}}>
          {showBasics && (
            <img
              src={Basics}
              alt="Basics"
              style={{ marginTop: "20px", display: "block",height: "500px",width: "500px" }}
            />
          )}
          {showThumbRule && (
            <img
              src={Rules}
              alt="Rules"
              style={{ marginTop: "20px", display: "block",height: "500px",width: "500px"}}
            />
          )}
          </div>
        </div>
      </div>
  
  );
}
