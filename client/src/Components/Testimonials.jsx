import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person1 from '../assets/register.jpg';
import person2 from '../assets/register.jpg';
import person3 from '../assets/register.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      author: 'John Doe',
      position: 'CEO, Founder',
      image: person1
    },
    {
      quote:
        'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
      author: 'James Woodland',
      position: 'Designer at Facebook',
      image: person2
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      author: 'Rob Smith',
      position: 'Product Designer at Twitter',
      image: person3
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000 // Set the interval between slides (in milliseconds)
  };

  return (
    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">
            <h3 className="line-bottom mb-4">Testimonials</h3>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="item">
                  <blockquote className="block-testimonial">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="author">
                      <img src={testimonial.image} alt="Free template by TemplateUX" />
                      <h3>{testimonial.author}</h3>
                      <p className="position">{testimonial.position}</p>
                    </div>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
