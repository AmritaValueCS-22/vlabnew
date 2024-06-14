// Sidebar.js

import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Topbar from "./Topnav";
import { Link, useLocation } from "react-router-dom";
import DashboardMain from ".";
import UserManagement from "../../layouts/UserManagement/UserManagement";
import NodalCenter from "../../layouts/Nodalcenter/NodalCenter";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/slices/userManagementReducer";
import { getValue } from "../../helpers/localStorage";
import NodalManage from "../../layouts/Nodalcenter/NodalManage";
import EditExperimentLayout from "./Lab/ExperimentEdit";
import LabsLayout from "./Lab/Labs";
import Listing from "./Lab/Listing";
import LabHome from "./Lab/LabHome";
import {
  addBroadDetails,
  getAllBroad,
} from "../../redux/slices/BroadAreaReducer";
import { getBroadState } from "../../redux/reselect/reselector";
const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);
  const [showDropdowns, setShowDropdowns] = useState([false, false, false]);
  const dispatch = useDispatch();
  const BroadDetails = useSelector(getBroadState);
  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };
    const userRole = getValue("userRole");
    dispatch(getUserDetails({ userRole }));
    dispatch(getAllBroad({ userRole }));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleDropdown = (index) => {
    const newDropdowns = showDropdowns.map((value, idx) =>
      idx === index ? !value : false
    );
    setShowDropdowns(newDropdowns);
  };

  const setTitle = () => {
    let title;
    const titleRoute = location.pathname.split("/");
    title =
      titleRoute[titleRoute.length - 1] === "userManagement"
        ? "User Management"
        : titleRoute[titleRoute.length - 1] === "list"
        ? "Nodal Centers"
        : titleRoute[titleRoute.length - 1] === "Nodalmanage"
        ? "Nodal Management"
        : titleRoute[titleRoute.length - 1] === "editExperiment"
        ? "Edit Experiment"
        : titleRoute[titleRoute.length - 1] === "labDetails"
        ? "Lab Details"
        : titleRoute[titleRoute.length - 1] === "experiment"
        ? "Experiments"
        : titleRoute[titleRoute.length - 1] === "broadArea"
        ? "Broad Area"
        : "Dashboard";
    return title;
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-2  dashboard-sn ${
            sidebarVisible ? "" : "hidden"
          }`}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 shadow bg-sidebar">
            {/* Sidebar Brand */}
            <Link
              to="/adminDashboard"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <h3 style={{ color: "white" }} className="nav-link-text ">
                Admin Panel
              </h3>
            </Link>{" "}
            {/* Sidebar Navigation */}
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              {/* Sidebar Items */}
              <li className="nav-item">
                <Link
                  to="/adminDashboard/dashboard"
                  className="nav-link align-middle px-4 text-white"
                >
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1">Dashboard</span>
                </Link>
              </li>
              {/* Labs */}
              <li className="nav-item dropdown">
                <div
                  onClick={() => toggleDropdown(0)}
                  className="nav-link dropdown-toggle align-middle px-4 text-white"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">Labs</span>
                </div>
                {/* Submenu */}
                <ul
                  className={`dropdown-menu ${showDropdowns[0] ? "show" : ""}`}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/adminDashboard/labs/broadArea"
                    >
                      Broad Area
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/adminDashboard/labs/labDetails"
                    >
                      Labs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/adminDashboard/labs/experiment"
                    >
                      Experiment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/adminDashboard/labs/editExperiment"
                    >
                      Edit Experiment
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="dropdown-item"
                      to="/adminDashboard/labs/managePage"
                    >
                      Manage Page
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* Portal Admin */}
              <li className="nav-item dropdown">
                <div
                  onClick={() => toggleDropdown(1)}
                  className="nav-link dropdown-toggle align-middle px-4 text-white"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">Nodal Centers</span>
                </div>
                {/* Submenu */}
                <ul
                  className={`dropdown-menu ${showDropdowns[1] ? "show" : ""}`}
                >
                  <li>
                    <Link
                      to="/adminDashboard/nodalCenters/list"
                      className="dropdown-item"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/adminDashboard/nodalCenters/Nodalmanage"
                      className="dropdown-item"
                    >
                      Nodal Management
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to={"/adminDashboard/userManagement"}
                  className="nav-link align-middle px-4 text-white"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1">User Management</span>
                </Link>
              </li>

              <li className="nav-item dropdown"></li>
            </ul>
            <hr />
            <div className="dropdown pb-4"></div>
          </div>
        </div>
        {/* Main content area */}
        <div className="col py-3 pt-1">
          <Topbar toggleSidebar={toggleSidebar} title={setTitle()} />

          {setTitle() === "User Management" ? (
            <UserManagement />
          ) : setTitle() === "Nodal Centers" ? (
            <NodalCenter />
          ) : setTitle() === "Nodal Management" ? (
            <NodalManage />
          ) : setTitle() === "Edit Experiment" ? (
            <EditExperimentLayout />
          ) : setTitle() === "Lab Details" ? (
            <LabsLayout />
          ) : setTitle() === "Experiments" ? (
            <Listing />
          ) : setTitle() === "Broad Area" ? (
            <LabHome />
          ) : (
            <DashboardMain />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
