import { Col, Container, Row } from "react-bootstrap";
import "./CareerPage.scss";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import SvgButton from "../../assets/icons/button.svg"
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import {NavLink} from "react-router-dom";
import { useState } from "react";


export const CareerPageInner = () => {
    const [details, setDetails] = useState(true);
    const [requirements, setRequirements] = useState(false);
    const [responsibilites, setResponsibilities] = useState(false);


  return (
    <>
        <section>
            <Container>
                <Row className="p-5 d-flex gap-5">
                    <Col md={5} className="pt-5">
                        <h6>CAREER AT ETHER</h6>
                        <h2 className="fw-bold">Full Stack Developer</h2>
                        <p className="text-muted">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <ButtonComponent text = "Apply Now"/>
                    </Col>

                    <Col className="job-description p-5 position-relative" md={5}>
                        <img src={SvgButton} alt="" className="position-absolute top-0 end-0" style={{rotate:"90deg"}}/>
                        <h5 className="fw-bold">Job Description</h5>
                        <p>Remote, India, 4 to 5 Years of Experience</p>
                        <p>Department : Product Engineering</p>
                        <p>Full Time 5 Position Available.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container className="career-details">
                <Row>
                    <Col>
                    <header className="d-flex justify-content-center p-3">
                        <NavLink to=''  className="career-links" 
                                onClick={()=> {setDetails(true);
                                setRequirements(requirements);
                                setResponsibilities(responsibilites)}}>
                            Details
                        </NavLink>
                        <NavLink to=''  className="career-links" 
                                onClick={()=>{setRequirements(true);
                                setDetails(!details);
                                setResponsibilities(responsibilites)}}>
                            Requirements
                        </NavLink>
                        <NavLink to=''  className="career-links" 
                                onClick={()=>{setResponsibilities(true);
                                setDetails(!details);
                                setRequirements(requirements)}}>
                            Responsibilities
                        </NavLink>
                    </header>
                    <div className="job-roles"> 
                    {details &&
                        <div className="details">
                            <ul>
                                <li>Create and edit video content for multi-platform use and 
                                    distribution for social media channels (Facebook, Youtube,
                                    Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).
                                </li>
                                <li>Design & Create highly engaging industry-related content in both photo, gif & video format</li>
                                <li>Publish Posts on various social media channels</li>
                                <li>Promote content on social networks and monitor engagement (e.g. comments and shares)</li>
                                <li>Research industry-related topics</li>
                                <li>Editing audio and sound design on projects</li>
                                <li>Engage in opportunities to develop original content and concepts for web and mobile</li>
                                <li>Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</li>
                                <li>Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</li>
                            </ul>
                        </div>
                    }

                    {requirements && 
                    <div className="requirements">
                        <ul>
                            <li>You should require the laptop or PC to work on a project</li>
                            <li>Mostly the project requirements is based on the front end technologies</li>
                            <li>The Project you are working is purely based on HTML, CSS, Javascript</li>
                            <li>Some times you will work on React or Angular based on the requirements</li>
                        </ul>
                    </div>
                    }

                    {responsibilites && 
                    <div className="responsibilites">
                        <ul>
                            <li>Should be able to work in Front End projects</li>
                            <li>Always ready to work based on requirements of the project</li>
                            <li>Most Projects should be based on the client requirements</li>
                            <li>Clients must be always satisfied with your works and efforts</li>
                            <li>You might be able to work in night shifts also</li>
                        </ul>
                    </div>
                    }
                    </div>
                   
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="apply-now mt-5">
            <Container>
                <h4>Apply Now</h4>
                <form action="">
                    <Row>
                        <Col xs sm md={6}><input type="text" placeholder="First Name" className="input"/></Col>
                        <Col xs sm md={6}><input type="text" placeholder="Last Name" className="input"/></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs sm md={6}><input type="email" placeholder="Email Id" className="input"/></Col>
                        <Col xs sm md={6}><input type="number" placeholder="Mobile No" className="input"/></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <textarea name="" id="" rows={5} placeholder="Why do you thing you are good fit for Ether?"></textarea>
                        </Col>
                    </Row>
                    <div className="d-flex gap-2 col-md-7 my-3">
                        <input type="checkbox" className="checkbox"/>
                        <span className="text-muted">I agree to accept the privacy policy, We will add your contact details provided in this form to our system for contacting you regarding your request.</span>
                    </div>

                    <ButtonComponent text="Submit Application"/>
                </form>
            </Container>
        </section>

        <CTAcomponent/>
    </>
  )
}
