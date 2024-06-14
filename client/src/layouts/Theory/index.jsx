import WithExperimentLayout from "../../Components/common/ExperimentLayout";

import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { LOCAL_HOST, LOCAL_PORT } from "../../config/base";
const Theory = () => {
  const { experimentIds } = useSelector((state) => state.exp);

  return (
    <div>
      <iframe
        src={`http://${LOCAL_HOST}:${LOCAL_PORT}/getSimulation?broadId=${experimentIds?.broadId}&labId=${experimentIds?.labId}&expId=${experimentIds?.expId}&isDocument=true&documentName=theory`}
        title="W3Schools Free Online Web Tutorials"
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
};

const TheoryComponent = WithExperimentLayout(Theory);
export default TheoryComponent;
