import React from "react";
import DashboardCards from "./Dashboardcard";
import AreaChart from "./Chart";
import RevenueSources from "./Pie-chart";
import ProjectCard from "./Table";

const DashboardMain = () => {
  return (
    <>
      <DashboardCards />
      <div className="row">
        <div className="col-xl-8">
          <AreaChart />
        </div>
        <div className="col-xl-4">
          <RevenueSources />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
