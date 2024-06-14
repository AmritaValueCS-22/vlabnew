import React, { useState } from "react";
import Image from "../assets/login2.jpg";
import { Link, useLocation } from "react-router-dom";
import RegiaterIMG from "../assets/register.jpg";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Fade from "react-reveal/Fade"; // Import the Fade component
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authReducer";
import { Base64 } from "js-base64";
import { getValueFromCookie } from "../helpers/cookies";
import Snackbar from "./common/snackbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  console.log(getValueFromCookie("token="));
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onHandleLogin = () => {
    try {
      dispatch(
        login({
          username,
          password: Base64.encode(password),
        })
      );
    } catch (error) {}
  };

  return (
    <>
      <Fade up duration={1000} delay={200}>
        {" "}
        {/* Add Fade component with up animation */}
        <div
          className="untree_co-hero inner-page overlay bg-light"
          style={{ backgroundImage: `url(${RegiaterIMG})` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 text-center ">
                    <h1
                      className="mb-4 heading text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Login
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="untree_co-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div
                className="col-lg-5 mx-auto order-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form action="#" className="form-box text-center">
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="form2Example1"
                    label=""
                    placeholder="User Name"
                    value={username}
                    onChange={handleUserNameChange}
                  />
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form2Example2"
                    label=""
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <MDBRow className="mb-4">
                    <MDBCol className="d-flex justify-content-center">
                      <MDBCheckbox
                        id="form2Example3"
                        label="Remember me"
                        defaultChecked
                      />
                    </MDBCol>
                    <MDBCol>
                      <a href="#!">Forgot password?</a>
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn
                    onClick={onHandleLogin}
                    type="submit"
                    className="mb-4"
                    block
                  >
                    Sign in
                  </MDBBtn>

                  <div className="text-center">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Login;
