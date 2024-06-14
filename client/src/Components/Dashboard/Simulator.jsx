import { Breadcrumb } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
 
const Simulator = () => {
  const { sub, exp } = useParams();
  console.log(sub, exp);
  return (
    <div style={{ flex: 0.85 }}>
      <Breadcrumb></Breadcrumb>
      <object
        data={`/src/LabFiles/PhysicalChemistry/EMF_Measurement/experiment.html`}
        type="text/html"
        width="100%"
        height="900px"
      />
    </div>
  );
};

export default Simulator;
