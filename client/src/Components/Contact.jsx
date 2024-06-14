import { Height } from '@mui/icons-material';
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        need: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, you can send the formData to your server or perform any other actions
        console.log(formData);
    };

    return (
      <div class="untree_co-section bg-light">
      
        <div className="container">
            <div className="text-center mt-5 mb-5">
            <div
              className=" text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h2 className="line-bottom text-center mb-4">
                {" "}
             Cantact Us
              </h2>
            </div>
            </div>

            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_name">Firstname *</label>
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_lastname">Lastname *</label>
                                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_email">Email *</label>
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_need">Please specify your need *</label>
                                            <select id="form_need" name="need" className="form-control" required onChange={handleChange}>
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option>Request Invoice for order</option>
                                                <option>Request order status</option>
                                                <option>Haven't received cashback yet</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_message">Message *</label>
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <center><div className="col-md-12 ">
                                        <input type="submit" className="btn btn-primary btn-send pt-2 btn-block" style={{width:'50%',alignItems:'center',marginTop:'20px'}} value="Send Message" />
                                    </div></center>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

    );
}

export default Contact;
