import React from 'react';

const Apply = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About Us</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="content-container"> {/* Container for text content */}
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                            Virtual Lab at Amrita Intelligent development of virtual laboratories with state-of-the-art computer simulation technology to create real world environments and problem handling capabilities is required to bridge the gap between institutions (or industries) that retain the physical laboratory and distantly placed economically challenged educational institutions.




A virtual laboratory is a tool for distance learning and/or experimentation that allows people to share knowledge, data, voice, video, tools, and many other resources. It provides a suitable environment to extend, improve, integrate, refine, and assist the learning and/or experimentation process of many subjects, thus contributing to an increase of the effectiveness of scientific research and widening the use of scarce or costly equipments. The diversity of models and structures for virtual laboratories is large and varies according to the nature of the project under investigation, the goals, and the technologies involved.



Amrita lab courses richly rely upon new up-to-date content and various techniques that require a new synergy of knowledge and experimental implementation. Hence a new kind of experimental science that can be brought as a virtual simulation based laboratory is proposed in this part of the proposal. As key part of the project, the Biotech school will study and use mathematical techniques in biology to study, hypothesize and demonstrate complex biological functions. Other labs in biotechnology, physical and chemical sciences, nanoscience are the major contributions from Amrita. Amrita Viswa Vidhyapeetham jointly participates with IIT Delhi, IIT Kanpur, IIT Bombay, IIT Kharagpur, IIT Guwahati, IIT Roorkee, IIIT Hyderabad, COE Pune and Dayalbagh University.



Although mathematics has long been intertwined with the biological sciences, an explosive synergy between biology and mathematics seems poised to enrich and extend both fields greatly in the coming decades. Among the various scenarios to study biology and disseminate information effectively and efficiently include the use of e-learning to offer courses. However some challenges include the lack of appropriate tools and content in certain advanced courses like computational biology, theoretical neuroscience and some other simpler courses like calculus for life sciences, advanced mathematics for undergraduate and postgraduate students etc.



As part of the virtual lab project pilot, a virtual neurophysiology lab has been developed in the short period. Virtual neurophysiology techniques like brain slicing, patch clamping, action potential in neurons, voltage and current clamp protocols have been implemented via user-interactive animations and through use of detailed mathematical simulators. In the area of physical sciences, a set of simulators for various basic physics labs such as DC circuit simulators, torsion pendulum simulator, tools for demonstrating Faraday’s law and Barkhausen effect, virtual optics tools have been built. A basic chemistry lab is also being developed as part of the pilot process.


                            </p>
                        </div>
                        <div className="img-container"> 
                            <img src={Contact1} className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Apply;
