import React, { useEffect } from "react";
import Image from "../assets/home.mp4";
import Staff from "../assets/staff.jpg";
import BG from "../assets/hero_bg.jpg";
import { Link } from "react-router-dom";
import News from "./News";
import Contact from "./Contact";
import { getBroadState } from '../redux/reselect/reselector'
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade"; 
import Testimonials from "./Testimonials";
import {getUserDetails} from '../redux/slices/userManagementReducer'
import {getAllBroad} from '../redux/slices/BroadAreaReducer'
import {getValue} from '../helpers/localStorage'
import Select from "react-select";
const HeroSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userRole = getValue("userRole") || "2";
    dispatch(getUserDetails({ userRole }));
    dispatch(getAllBroad());
  }, []);
  return (
    
    <div
      class="untree_co-hero overlay"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12">
            <div class="row justify-content-center ">
              <div class="col-lg-6 text-center ">
                {/* <a
                  href="#"
                  data-fancybox
                  data-aos="fade-up"
                  data-aos-delay="0"
                  class="caption mb-4 d-inline-block"
                >
                  Watch the video
                </a> */}

                <h1
                  class="mb-4 heading text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Fade up duration={1000} delay={200}>
                    {" "}
                    Education is the Mother of Leadership
                  </Fade>
                </h1>
                <p class="mb-0" data-aos="fade-up" data-aos-delay="300">
                  {/* <a href="#" class="btn btn-secondary">
                    Explore courses
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = ({ icon, title, courses, sub }) => {
  
  return (
    <Fade up duration={1000} delay={200}>
      <div
        className="col-sm-6 col-md-6 col-lg-3 mb-4"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <Link
          className="category d-flex align-items-start h-100"
          to={`/experiment/${sub}`}
        >
          <div>
            <i className={`uil ${icon}`}></i>
          </div>
          <div>
            <h3>{title}</h3>
            <span>{courses} courses</span>
          </div>
        </Link>
      </div>
      
    </Fade>
  );
};

const CategorySection = () => {
  const BroadDetails = useSelector(getBroadState);
  const broadAreas = BroadDetails?.map((item) => {
    return {
      label: item.broadAreaName,
      value: item.broadAreaName,
      id: item.broadAreaId,
    };
  });

  const categories = broadAreas.map((broadArea, index) => ({
    icon: "uil-atom", 
    title: broadArea.label,
    courses: "0", 
// sub:'77'
   sub: broadArea.id
  }));

  return (
    <>
      <div className="untree_co-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <Fade up duration={1000} delay={200}>
              <div
                className="col-lg-7 text-center"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2 className="line-bottom text-center mb-4">
                  Virtual Labs at Amrita Vishwa Vidyapeetham
                </h2>
              </div>
            </Fade>
          </div>
          <div className="row align-items-stretch">
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <News></News>

      <Testimonials></Testimonials>
      <Contact />
    </>
  );
};

export default Home;
