import React from 'react';
import './Sidebar.css';
import Topbar from './Topnav';
import DashboardCards from './Dashboardcard';
import AreaChart from './Chart';
import RevenueSources from './Pie-chart';
import ProjectCard from './Table';


const MainContent = ({ toggleSidebar }) => {
    return (
        <div className="col py-1 pt-1" style={{width:'83%'}}>
            <Topbar toggleSidebar={toggleSidebar} />
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
        </div>
    );
};

export default MainContent;
