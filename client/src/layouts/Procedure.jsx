import WithExperimentLayout from "../Components/common/ExperimentLayout";
import React from "react";

import { useSelector } from "react-redux";
import { LOCAL_HOST, LOCAL_PORT } from "../config/base";
const Procedure = () => {
  const { experimentIds } = useSelector((state) => state.exp);

  return (
    <div>
      <iframe
        src={`http://${LOCAL_HOST}:${LOCAL_PORT}/getSimulation?broadId=${experimentIds?.broadId}&labId=${experimentIds?.labId}&expId=${experimentIds?.expId}&isDocument=true&documentName=procedure`}
        title="Online Web Tutorials"
        width="90%"
        height="900px"
      ></iframe>
    </div>
  );
};

const ProcedureComponent = WithExperimentLayout(Procedure);
export default ProcedureComponent;
