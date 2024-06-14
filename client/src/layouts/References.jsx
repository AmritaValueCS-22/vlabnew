import WithExperimentLayout from "../Components/common/ExperimentLayout";
import React from "react";
import { LOCAL_HOST, LOCAL_PORT } from "../config/base";
import { useSelector } from "react-redux";
const References = () => {
  const { experimentIds } = useSelector((state) => state.exp);

  return (
    <div>
      <iframe
        src={`http://${LOCAL_HOST}:${LOCAL_PORT}/getSimulation?broadId=${experimentIds?.broadId}&labId=${experimentIds?.labId}&expId=${experimentIds?.expId}&isDocument=true&documentName=references`}
        title="W3Schools Free Online Web Tutorials"
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
};

const ReferencesComponent = WithExperimentLayout(References);
export default ReferencesComponent;
