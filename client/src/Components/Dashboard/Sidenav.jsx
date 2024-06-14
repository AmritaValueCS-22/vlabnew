import React from 'react';
import "./Admin.css";
import AreaChart from './Chart';
import RevenueSources from './Pie-chart';
import ProjectCard from './Table';
import DashboardCards from './Dashboardcard';
import Topbar from './Topnav';

function Sidenav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-2 ">
          {/* Sidebar */}
          <div className="col-auto px-0">
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              {/* Sidebar - Brand */}
              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="">Admin Panel</div>
              </a>

              {/* Divider */}
              <hr className="sidebar-divider my-0" />

              {/* Nav Item - Dashboard */}
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider" />

              {/* Heading */}
              <div className="sidebar-heading">
                contents
              </div>

              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i className="fas fa-fw fa-cog"></i>
                  <span>Labs</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                  </div>
                </div>
              </li>

              {/* Nav Item - Utilities Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                  aria-expanded="true" aria-controls="collapseUtilities">
                  <i className="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                    <a className="collapse-item" href="utilities-other.html">Other</a>
                  </div>
                </div>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider" />

              {/* Heading */}
              <div className="sidebar-heading">
                Addons
              </div>

              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                  aria-expanded="true" aria-controls="collapsePages">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </a>
                
              </li>

              {/* Nav Item - Charts */}
              <li className="nav-item">
                <a className="nav-link" href="charts.html">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span>
                </a>
              </li>

              {/* Nav Item - Tables */}
              <li className="nav-item">
                <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span>
                </a>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
            </ul>
          </div>
          </div>
          <div className="col-md-10">
          <Topbar />
          <div className="row">
                    <DashboardCards />
                    <div className="row">
                        <div className="col-md-8">
                            <AreaChart />
                        </div>
                        <div className="col-md-4">
                            <RevenueSources />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <ProjectCard />
                        </div>
                    </div>
                    </div>
                    </div>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
