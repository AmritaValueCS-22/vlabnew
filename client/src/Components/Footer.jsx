import React from 'react';

// Footer component
function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <AboutAndConnect />
          <Projects />
          <Gallery />
          <Contact />
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
}

// About and Connect component
function AboutAndConnect() {
  return (
    <div className="col-lg-3 mr-auto">
      <div className="widget">
        <h3>About Us<span className="text-primary">.</span></h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="widget">
        <h3>Connect</h3>
        <ul className="list-unstyled social">
          <li><a href="#"><span className="icon-instagram"></span></a></li>
          <li><a href="#"><span className="icon-twitter"></span></a></li>
          <li><a href="#"><span className="icon-facebook"></span></a></li>
          <li><a href="#"><span className="icon-linkedin"></span></a></li>
          <li><a href="#"><span className="icon-pinterest"></span></a></li>
          <li><a href="#"><span className="icon-dribbble"></span></a></li>
        </ul>
      </div>
    </div>
  );
}


function Projects() {
  return (
    <div className="col-lg-2 ml-auto">
      <div className="widget">
        <h3>Projects</h3>
        <ul className="list-unstyled float-left links">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">HTML5</a></li>
          <li><a href="#">CSS3</a></li>
          <li><a href="#">jQuery</a></li>
          <li><a href="#">Bootstrap</a></li>
        </ul>
      </div>
    </div>
  );
}

// Gallery component
function Gallery() {
  return (
    <div className="col-lg-3">
      <div className="widget">
        <h3>Gallery</h3>
        <ul className="instafeed instagram-gallery list-unstyled">
          {/* Gallery images go here */}
        </ul>
      </div>
    </div>
  );
}

// Contact component
function Contact() {
  return (
    <div className="col-lg-3">
      <div className="widget">
        <h3>Contact</h3>
        <address>43 Raymouth Rd. Baltemoer, London 3910</address>
        <ul className="list-unstyled links mb-4">
          <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
          <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
          <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
        </ul>
      </div>
    </div>
  );
}

// Copyright component
function Copyright() {
  return (
    <p className="copyright">Copyright &copy;
      <script>document.write(new Date().getFullYear());</script>.
      All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a> {/* License information: https://untree.co/license/ */}
    </p>
  );
}

export default Footer;
