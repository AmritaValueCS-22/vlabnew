import React from "react";
// import Image1 from "img/img-school-6-min.jpg";

import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
} from "utility/images";

const Gallery = () => {
  return (
    <div>
      <div class="untree_co-section">
        <div className=" text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 className="line-bottom text-center mb-4"> Gallery</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 item">
              <a
                href={Image1}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image1} />
              </a>
              <a
                href={Image3}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image3} />
              </a>
              <a
                href={Image4}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image4} />
              </a>
              <a
                href={Image5}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image5} />
              </a>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <a
                href={Image6}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image6} />
              </a>
              <a
                href={Image7}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image7} />
              </a>
              <a
                href={Image8}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image8} />
              </a>
              <a
                href={Image9}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image9} />
              </a>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <a
                href={Image10}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image10} />
              </a>
              <a
                href={Image11}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image11} />
              </a>
              <a
                href={Image12}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image12} />
              </a>
              <a
                href={Image13}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image13} />
              </a>
              <a
                href={Image14}
                class="item-wrap fancybox mb-4"
                data-fancybox="gal"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span class="icon-search2"></span>
                <img class="img-fluid" src={Image14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
