import { Breadcrumb, Button, Typography } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import WithExperimentLayout from "../Components/common/ExperimentLayout";
import { useSelector } from "react-redux";
import { getValue } from "../helpers/localStorage";
import { LOCAL_HOST, LOCAL_PORT } from "../config/base";

const Simulator = () => {
  const { sub, exp } = useParams();
  const { selectedCategory, experimentIds } = useSelector((state) => state.exp);
  const userRole = getValue("userRole");
  return (
    <div style={{ flex: 0.85, height: "100%" }}>
      <Breadcrumb>
        <Breadcrumb.Item>{sub}</Breadcrumb.Item>
        <Breadcrumb.Item>{`exp ${exp}`}</Breadcrumb.Item>
      </Breadcrumb>
      {userRole ? (
        <iframe
          src={`http://${LOCAL_HOST}:${LOCAL_PORT}/getSimulation?broadId=${experimentIds?.broadId}&&labId=${experimentIds?.labId}&&expId=${experimentIds?.expId}`}
          title="W3Schools Free Online Web Tutorials"
          width="100%"
          height="900px"
        ></iframe>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography style={{ marginBottom: 15, color: "black" }}>
            Login to access the simulation
          </Typography>
         
            <Link to={"/Login"}>
            <Button style={{ width: 250 }}>  Login  </Button>
             </Link>
      
        </div>
      )}
    </div>
  );
};
const SimulatorPage = WithExperimentLayout(Simulator);
export default SimulatorPage;