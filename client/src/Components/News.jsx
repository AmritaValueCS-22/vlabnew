import React from "react";
import { newsData } from "../Data/NewsData";
import Fade from 'react-reveal/Fade'; // Import the Fade component

function News() {
  return (
    <div>
      <NewsSection />
    </div>
  );
}

function NewsSection() {
  return (
    
    <div className="untree_co-section bg-light">
      <div className="container">
      <Fade up duration={1000} delay={200}>
        <div className="row align-items-stretch">
        <div
              className=" text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="line-bottom text-center mb-4">
                {" "}
                News & Events
              </h2>
            </div>
          {newsData.map((news) => {
            return (
              
              <NewsItem
                imgSrc={news.imgSrc}
                title={news.title}
                date={news.date}
                // author={news.author}
              />
            );
          })}
        </div>
        </Fade>
        {/* <div className="row mt-5">
          <div className="col-12 text-center">
            <ul className="list-unstyled custom-pagination">
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
   
  );
}

function NewsItem({ imgSrc, title, date, author }) {
  return (
    <>
     <Fade up duration={1000} delay={200}>
    <div className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
      
      <div className="media-h d-flex h-100">
      
        <figure>
          <img src={imgSrc} alt="Image" />
        </figure>
        <div className="media-h-body">
          <h2 className="mb-3">
            <a href="#" style={{ textDecoration: "none" }}>
              {title}
            </a>
          </h2>
          <div className="meta ">
            <span className="icon-calendar mr-2"></span>
            <span>{date}</span> <span className="icon-person mr-2"></span>
            {author}
          </div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
    </Fade>
    </>
  );
}

export default News;
