import React, { useState } from "react";
import Button from "@mui/material/Button";

const Step = ({ onStepClick, selectedExample }) => {
  // const [selectedStep, setSelectedStep] = useState("");

  // const steps = {
  //   example1: [
  //     "Click the Step 1 button to see the 1st step for Example 1",
  //     "Click the Step 2 button to see the 2nd step for Example 1",
  //     "Click the Step 3 button to see the 3rd step for Example 1"
  //   ],
  //   example2: [
  //     "Click the Step 1 button to see the 1st step for Example 2",
  //     "Click the Step 2 button to see the 2nd step for Example 2",
  //     "Click the Step 3 button to see the 3rd step for Example 2"
  //   ],
  //   example3: [
  //     "Click the Step 1 button to see the 1st step for Example 3",
  //     "Click the Step 2 button to see the 2nd step for Example 3",
  //     "Click the Step 3 button to see the 3rd step for Example 3"
  //   ]
  // };

  // const handleStepClick = (step) => {
  //   setSelectedStep(step);
  //   onStepClick(step);
  // };

  return (
    <>
      {/* <h4 style={{ margin: "20px" }}>Steps</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {steps[selectedExample].map((stepText, index) => (
          <div key={index}>
            {selectedStep === `step${index + 1}` && (
              <p style={{ margin: "5px 0" }}>{stepText}</p>
            )}
            <Button
              variant="outlined"
              onClick={() => handleStepClick(`step${index + 1}`)}
            >
              Step {index + 1}
            </Button>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Step;
