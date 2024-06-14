import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { Hide_header } from "../utilits/common/utitlis";
import { getValue } from "../helpers/localStorage";
import { Avatar } from "antd";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isNotExist = Hide_header.includes(location.pathname);
  const isLoggedIn = getValue("isLoggedIn");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const isHomePage = location.pathname === "/";

      if (isHomePage && offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Determine if it's the home page
  const isHomePage = location.pathname === "/";

  return (
    !isNotExist && (
      <nav className={`site-nav mb-5 ${isSticky ? "sticky" : ""}`}>
        <div
          className="pb-2 top-bar mb-3"
          style={{
            background: isHomePage
              ? isSticky
                ? "#FFFFFF"
                : "transparent"
              : "#FFFFFF",
            color: isHomePage ? (isSticky ? "#000000" : "#FFFFFF") : "#000000",
          }}
        >
          <div className="container" style={{ display: "" }}>
            <div
              className="row align-items-center"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="col-6 col-lg-9">
                {" "}
                {isHomePage && (
                  <img style={{ width: "20%" }} src={Logo} alt="" />
                )}
              </div>
              {isLoggedIn ? (
                <div className="col-4 col-lg-3">
                  <Avatar.Group>
                    <Link to={"/adminDashboard"}>
                      <Avatar
                        style={{
                          backgroundColor: "#fde3cf",
                          color: "#f56a00",
                          fontWeight: 600,
                        }}
                      >
                        {getValue("name").charAt(0).toUpperCase()}
                      </Avatar>
                    </Link>
                  </Avatar.Group>
                </div>
              ) : (
                <div className="col-6 col-lg-3 text-right">
                  <Link
                    to="/register"
                    className="small mr-3"
                    style={{ textDecoration: "none", marginRight: "20px" }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-1"
                      style={{ marginRight: "5px" }}
                    />
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="small"
                    style={{ textDecoration: "none", marginRight: "20px" }}
                  >
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      className="mr-1"
                      style={{ marginRight: "5px" }}
                    />
                    Login
                  </Link>
                  {/* <div style={{ display: "flex", justifyContent: "flex-end" }}> */}

                  {/* </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="sticky-nav js-sticky-header"
          style={{
            background: isHomePage
              ? isSticky
                ? "#FFFFFF"
                : "transparent"
              : "#FFFFFF",
            color: isHomePage ? (isSticky ? "#000000" : "#FFFFFF") : "#000000",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            top: isHomePage ? (isSticky ? 0 : "auto") : 0,
          }}
        >
          <div className="container position-relative">
            <div className="site-navigation text-center">
              <Link
                to="/"
                className="logo menu-absolute m-0"
                style={{
                  textDecorationLine: "none",
                  color: isHomePage
                    ? isSticky
                      ? "#000000"
                      : "#FFFFFF"
                    : "#000000",
                }}
              >
                Value @ Amrita<span className="text-primary"></span>
              </Link>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/workshops"
                  >
                    Workshops
                  </Link>
                </li>
                <li className="has-children">
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/nodal-centres"
                  >
                    Nodal Centres
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/nodalcentreapply">
                        Apply for Nodal centre Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/nodalcentrelist">Nodal Centre List</Link>
                    </li>
                    <li>
                      <Link to="nodalcentredemo">Free online demo</Link>
                    </li>
                    <li>
                      <Link to="/inauguration">Nodal Centre inaugurations</Link>
                    </li>
                    <li>
                      <Link to="/nodalcentrelogin">Unique login ID</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/news"
                  >
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/projects"
                  >
                    Publications
                  </Link>
                  <Link
                    style={{
                      textDecorationLine: "none",
                      color: isHomePage
                        ? isSticky
                          ? "#000000"
                          : "#FFFFFF"
                        : "#000000",
                    }}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Your code for the burger icon */}
            </div>
          </div>
        </div>
      </nav>
    )
  );
};

export default NavBar;
