import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Components/home";
import NavBar from "../Components/Header";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Footer from "../Components/Footer";
import News from "../Components/News";

import Gallery from "../Components/Gallery";
import ExperimentPage from "../Components/Model/ExperimentPage";
import ContentPage from "./ContentPage";
import ExperimentEdit from '../Components/Dashboard/Lab/ExperimentEdit'
import Contact from "../Components/Contact";
import Project from "../Components/Project";
import Workshop from "../Components/Workshop";
import Apply from "../Components/NodalCentres/Apply";
import Demo from "../Components/NodalCentres/Demo";
import Inauguration from "../Components/NodalCentres/Inauguration";
import NodalLogin from "../Components/NodalCentres/NodalLogin";
import List from "../Components/NodalCentres/List";

import Simulation from "../layouts/Simulation";
import Labs from "../Components/Dashboard/Lab/Labs";
import AdminDashboard from "../Components/Dashboard/Dashboard";

import LoadingScreen from "../Components/loadingScreen";
import { useSelector } from "react-redux";
import { userRoleDetails } from "../utilits/common/userDetails";
import UserManagement from "./UserManagement/UserManagement";
import DashboardMain from "../Components/Dashboard";
import NodalCenter from "./Nodalcenter/NodalCenter";
import { getValue } from "../helpers/localStorage";
import NodalManage from "./Nodalcenter/NodalManage";

import TheoryComponent from "./Theory";
import Listing from "../Components/Dashboard/Lab/Listing";
import LabHome from "../Components/Dashboard/Lab/LabHome";

const PathWrapper = () => {
  const { loading } = useSelector((state) => state.auth);
  const userRole = userRoleDetails();
  const isLoggedIn = getValue("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [userRole, isLoggedIn]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/experiment/:sub" element={<ExperimentPage />} />
        {/* <Route path=":exp" element={<Simulation />} /> */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/nodalcentreapply" element={<Apply />} />
        <Route path="/nodalcentredemo" element={<Demo />} />
        <Route path="/inauguration" element={<Inauguration />} />
        <Route path="/nodalcentrelogin" element={<NodalLogin />} />
        <Route path="/nodalcentrelist" element={<List />} />
        <Route path="/Labs" element={<Labs />} />
        <Route path="/experiment-page/:sub/:exp" element={<Simulation />} />

        <Route path="/adminDashboard" element={<AdminDashboard />}>
          <Route path="userManagement" element={<UserManagement />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="nodalCenters/list" element={<NodalCenter />} />
          <Route path="nodalCenters/Nodalmanage" element={<NodalManage />} />
          <Route path="labs/editExperiment" element={<ExperimentEdit/>} />
          <Route path="labs/labDetails" element={<Labs/>}/>
          <Route path="labs/Experiment" element={<Listing/>}/>
          <Route path="labs/broadArea" element={<LabHome/>}/>
          
        </Route>
      </Routes>
    </>
  );
};

export default PathWrapper;
