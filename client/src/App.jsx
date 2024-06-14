import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./redux/store";
import PathWrapper from "./layouts/PathWrapper";
import { ConfigProvider } from "antd";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Workshop from "./Components/Workshop";
import Apply from "./Components/NodalCentres/Apply";
import Demo from "./Components/NodalCentres/Demo";
import Inauguration from "./Components/NodalCentres/Inauguration";
import NodalLogin from "./Components/NodalCentres/NodalLogin";
import List from "./Components/NodalCentres/List";

import Simulation from "./layouts/Simulation";
import Sidebar from "./Components/Dashboard/Dashboard";
import Labs from "./Components/Dashboard/Lab/Labs";
import Listing from "./Components/Dashboard/Lab/Listing";
import ExperimentEdit from "./Components/Dashboard/Lab/ExperimentEdit";
import Sidenav from "./Components/Dashboard/Sidenav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       // Seed Token
    //       colorPrimary: "green",
    //       borderRadius: 2,

    //       // Alias Token
    //       colorBgContainer: "#f6ffed",
    //     },
    //   }}
    // >
    //   <Router>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/gallery" element={<Gallery />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/news" element={<News />} />
    //       <Route path="/experiment" element={<ExperimentPage />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/projects" element={<Project />} />
    //       <Route path="/workshops" element={<Workshop />} />
    //       <Route path="/nodalcentreapply" element={<Apply />} />
    //       <Route path="/nodalcentredemo" element={<Demo />} />
    //       <Route path="/inauguration" element={<Inauguration />} />
    //       <Route path="/nodalcentrelogin" element={<NodalLogin />} />
    //       <Route path="/nodalcentrelist" element={<List />} />
    //       <Route path="/experiment-page/:name" element={<Simulation />} />
    //     </Routes>
    //     <Footer />
    //   </Router>
    // </ConfigProvider>
    // <Sidebar/>
    // <Sidenav/>

    // Alias Token

    <Provider store={store}>
      <ConfigProvider>
        <Router>
          <PathWrapper />
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
