import React, { useState } from "react";
import RegiaterIMG from "../assets/register.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  clearState,
  register,
  updateResisterData,
} from "../redux/slices/authReducer";
import { useNavigate } from "react-router-dom";
import { Base64 } from "js-base64";
import Snackbar from "./common/snackbar";

const Register = () => {
  const { registerData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {
    fullname,
    email,
    password,
    confirmpassword,
    username,
    age,
    gender,
    phonenumber,
    state,
    country,
    profession,
    college,
    subject,
    university,
    schoolId,
  } = registerData;

  const [step, setStep] = useState(1);
  const validationForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      fullname === "" ||
      schoolId === ""
    ) {
      if (fullname === "") {
        Snackbar({
          type: "info",
          content: "Please enter valid first name",
        });
      } else if (username === "") {
        Snackbar({
          type: "info",
          content: "Please enter a user name",
        });
      } else if (!emailRegex.test(email)) {
        Snackbar({
          type: "info",
          content: "Please enter a valid mail",
        });
      } else if (password === "") {
        Snackbar({
          type: "info",
          content: "Please enter the password",
        });
      } else if (password !== confirmpassword) {
        Snackbar({
          type: "info",
          content: "Password do not match",
        });
      } else if (password.length < 8) {
        Snackbar({
          type: "info",
          content: "Your password must be at least 8 character",
        });
      } else if (schoolId === "") {
        Snackbar({
          type: "info",
          content: "School ID is mandatory",
        });
      }
    }
  };

  const handleRegister = () => {
    try {
      validationForm();
      if (
        fullname.trim() !== "" &&
        email.trim() !== "" &&
        schoolId.trim() !== "" &&
        password.trim() !== "" &&
        confirmpassword.trim() !== "" &&
        username.trim() !== ""
      ) {
        const data = {
          ...registerData,
          password: Base64.encode(registerData.password),
          confirmpassword: Base64.encode(registerData.confirmpassword),
          username: username.trim(),
          fullname: fullname.trim(),
        };
        dispatch(register(data, navigation));
        dispatch(clearState());
        setStep(1);
      }
    } catch (error) {
      Snackbar({
        type: "error",
        content: "Please enter mandatory fields",
      });
    }
  };
  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(
      updateResisterData({
        ...registerData,
        [name]: value,
      })
    );
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="col-12 mb-3">
              <input
                name="fullname"
                value={fullname}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="Full name"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <input
                name="username"
                value={username}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="User Name"
                required
              />
            </div>

            <div className="col-12 mb-3">
              <input
                name="email"
                value={email}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <input
                name="password"
                value={password}
                onChange={onHandleChange}
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <input
                name="confirmpassword"
                value={confirmpassword}
                onChange={onHandleChange}
                type="password"
                className="form-control"
                placeholder="Re-type Password"
                required
              />
            </div>
            <div className="col-12 mb-3">
              <input
                name="schoolId"
                value={schoolId}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="Student/School Id"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="col-12 mb-3">
              <select
                className="form-control"
                name={"age"}
                onChange={onHandleChange}
                value={age}
              >
                <option value="">-- Select Age Group --</option>
                <option value="under_18">Under 18</option>
                <option value="18_24">18-24</option>
                <option value="25_34">25-34</option>
                <option value="35_44">35-44</option>
                <option value="45_54">45-54</option>
                <option value="55_64">55-64</option>
                <option value="65_over">65 and over</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <select
                className="form-control"
                name={"gender"}
                onChange={onHandleChange}
                value={gender}
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <input
                name="phonenumber"
                value={phonenumber}
                onChange={onHandleChange}
                type="tel"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="col-12 mb-3">
              <input
                name="state"
                value={state}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-12 mb-3">
              <select
                className="form-control"
                name={"country"}
                onChange={onHandleChange}
                value={country}
              >
                <option value="">-- Select Country --</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Belgium">Belgium</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Ireland">Ireland</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Oman">Oman</option>
                <option value="Singapore">Singapore</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <select
                className="form-control"
                name={"profession"}
                onChange={onHandleChange}
                value={profession}
              >
                <option value="">-- Select Profession --</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <input
                name="college"
                value={college}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="College"
              />
            </div>

            <div className="col-12 mb-3">
              <input
                name="subject"
                value={subject}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="col-12 mb-3">
              <input
                name="university"
                value={university}
                onChange={onHandleChange}
                type="text"
                className="form-control"
                placeholder="University"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className="untree_co-hero inner-page overlay bg-light"
        style={{
          backgroundImage: `url(${RegiaterIMG})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1
                    className="mb-4 heading text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Register
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
              <form className="form-box">
                <div className="row">
                  {renderStep()}
                  <div className="col-12 mt-3">
                    {step > 1 && (
                      <button
                        type={"button"}
                        onClick={prevStep}
                        className="btn btn-secondary float-left"
                      >
                        Previous
                      </button>
                    )}
                    {step < 3 && (
                      <button
                        type={"button"}
                        onClick={nextStep}
                        className="btn btn-primary float-right next-btn"
                      >
                        Next
                      </button>
                    )}
                    {step === 3 && (
                      <button
                        type={"button"}
                        onClick={handleRegister}
                        className="btn btn-primary float-right next-btn"
                      >
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
