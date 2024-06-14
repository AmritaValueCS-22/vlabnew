import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { LocationOn, Event, LocationCity, Assignment } from '@mui/icons-material';
import Contact1 from '../assets/img_1.jpg';
const Workshop = () => {
    return (
       <>
       <div> <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About Us</h2>
                            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                        </div>

                        <div className="row">
                            <div className="content-container"> {/* Container for text content */}
                                <h3>Virtual Labs Workshops.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                               
                                <p>
                                Amrita Vishwa Vidyapeetham's VALUE project is running a series of workshops on Virtual Labs in Physical & Chemical Sciences, Biological Sciences, Mechanical Engineering and Computer Science. These workshops will offer an introduction to the innovative world of Virtual Laboratories for both physical and chemical sciences.

Virtual Labs are a new immersive e-learning tool that provides a media-rich, interactive user interface that teachers can use to supplement their curriculum. These Virtual Labs are located on an open webpage that can be accessed by anyone through a web browser, on any Internet-connected computer in the world. A variety of laboratory experiments can be conducted virtually using animation, simulation or remotely triggered hardware. Laboratory experiments are modeled very close to real-life experiments and when used as a learning tool by students it allows them to learn the material more efficiently and can actually make doing the practical experiments easier.

The workshop offers a fantastic opportunity for all faculty members involved in the education of physics, chemistry, bioloical sciences, computer science and mechanical engineering to learn more about Virtual Labs. We will showcase our online laboratory experiments including a hands-on training session in using the Virtual Labs website.

This project is an initiative of Ministry of Human Resource Department under National Mission on Education through ICT (NME-ICT.

For workshop details and registration please click the relevant link below:
 
                                </p>
                            </div>
                            <div className="img-container"> 
                                <img src={Contact1} className="img-fluid" alt="" style={{width:'150%'}} />
                            </div>

                        </div>
                        <TableContainer component={Paper}  style={{width:"70%"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Venue</TableCell>
                        <TableCell>Registration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <IconButton aria-label="location" color="primary">
                                <LocationOn />
                            </IconButton>
                            New York
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="date" color="primary">
                                <Event />
                            </IconButton>
                            2024-04-01
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="venue" color="primary">
                                <LocationCity />
                            </IconButton>
                            Central Park
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="registration" color="primary">
                                <Assignment />
                            </IconButton>
                            Register Now
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <IconButton aria-label="location" color="primary">
                                <LocationOn />
                            </IconButton>
                            London
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="date" color="primary">
                                <Event />
                            </IconButton>
                            2024-04-15
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="venue" color="primary">
                                <LocationCity />
                            </IconButton>
                            Hyde Park
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="registration" color="primary">
                                <Assignment />
                            </IconButton>
                            Register Now
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <IconButton aria-label="location" color="primary">
                                <LocationOn />
                            </IconButton>
                            Paris
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="date" color="primary">
                                <Event />
                            </IconButton>
                            2024-05-01
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="venue" color="primary">
                                <LocationCity />
                            </IconButton>
                            Eiffel Tower
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="registration" color="primary">
                                <Assignment />
                            </IconButton>
                            Register Now
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <IconButton aria-label="location" color="primary">
                                <LocationOn />
                            </IconButton>
                            Tokyo
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="date" color="primary">
                                <Event />
                            </IconButton>
                            2024-05-15
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="venue" color="primary">
                                <LocationCity />
                            </IconButton>
                            Shibuya Crossing
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="registration" color="primary">
                                <Assignment />
                            </IconButton>
                            Register Now
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

                    </div>
                </section></div>
           
      </>
    );
}

export default Workshop;
