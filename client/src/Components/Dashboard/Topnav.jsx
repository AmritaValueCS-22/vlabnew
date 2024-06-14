import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Topnav.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/authReducer";
import { deleteCookie, getValueFromCookie } from "../../helpers/cookies";
import { deleteAll, deleteValue, getValue } from "../../helpers/localStorage";
import { Avatar } from "antd";

function Topbar({ toggleSidebar, title }) {
  const [showDropdowns, setShowDropdowns] = useState([
    false,
    false,
    false,
    false,
  ]);
  const dispatch = useDispatch();
  const toggleDropdown = (index) => {
    const newDropdowns = showDropdowns.map((value, idx) =>
      idx === index ? !value : false
    );
    setShowDropdowns(newDropdowns);
  };
  const onLogOut = () => {
    try {
      const token = getValueFromCookie("token=");
      const userId = getValue("userId");
      dispatch(logOut({ token, userId }));
      deleteCookie("token=");
      deleteAll();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={toggleSidebar}
      >
        <i className="fa fa-bars"></i>
      </button>
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <h5 style={{ fontWeight: 600, fontSize: 25, color: "black" }}>
          {title}
        </h5>
      </form>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <div className="nav-link" onClick={() => toggleDropdown(0)}>
            <FontAwesomeIcon icon={faCog} style={{ color: "grey" }} />
          </div>
          <div
            className={`dropdown-menu dropdown-menu-right ${
              showDropdowns[0] ? "show" : ""
            }`}
          >
            <button className="dropdown-item" type="button">
              light
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">
              dark
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">
              color palettee
            </button>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link" onClick={() => toggleDropdown(1)}>
            <FontAwesomeIcon icon={faBell} style={{ color: "grey" }} />
            <span className="badge badge-danger badge-counter">3+</span>
          </div>
          <div
            className={`dropdown-menu dropdown-menu-right ${
              showDropdowns[1] ? "show" : ""
            }`}
          >
            <button className="dropdown-item" type="button">
              <div>
                <div class="small text-gray-500">December 7, 2019</div>
                biotechnology labs added new experiment!
              </div>
            </button>
            <button className="dropdown-item" type="button">
              <div>
                <div class="small text-gray-500">December 2, 2019</div>
                Computer science lab added new experiment!
              </div>
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">
              <div>
                <div class="small text-gray-500">December 12, 2019</div>A new
                User logged in!!
              </div>
            </button>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link" onClick={() => toggleDropdown(2)}>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "grey" }} />
            <span className="badge badge-danger badge-counter">7</span>
          </div>
          <div
            className={`dropdown-menu dropdown-menu-right ${
              showDropdowns[2] ? "show" : ""
            }`}
          >
            <button className="dropdown-item" type="button">
              <div class="text-truncate">
                i am not able to access the portal could reset the password !
              </div>
              <div class="small text-gray-500">Jae Chun · 1d</div>
            </button>
            <button className="dropdown-item" type="button">
              <div class="text-truncate">the simulation is no available!</div>
              <div class="small text-gray-500">Morgan Alvarez · 2d</div>
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">
              <div class="text-truncate">
                does the computer science course has dsa?
              </div>
              <div class="small text-gray-500">rahul · 2w</div>
            </button>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div
            className="nav-link"
            onClick={() => toggleDropdown(3)}
            style={{ cursor: "pointer" }}
          >
            <Avatar.Group>
              <Avatar
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                  fontWeight: 600,
                }}
              >
                {getValue("name").charAt(0).toUpperCase()}
              </Avatar>
            </Avatar.Group>
          </div>
          <div
            className={`dropdown-menu dropdown-menu-right ${
              showDropdowns[3] ? "show" : ""
            }`}
          >
            {/* <button className="dropdown-item" type="button">
              Profile
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" type="button">
              Settings
            </button> */}
            {/* <div className="dropdown-divider"></div> */}
            <button onClick={onLogOut} className="dropdown-item" type="button">
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
