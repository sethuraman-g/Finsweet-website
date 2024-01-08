import OrangeBox from "../../assets/icons/orangebox.svg";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import "./ContactUs.scss";
import Facebook from "../../assets/icons/FBicon.svg"
import Twitter from "../../assets/icons/tweetIcon.svg"
import Instagram from "../../assets/icons/instaIcon.svg"
import LinkedIn from "../../assets/icons/linkedInIcon.svg"
import ContactMap from "../../assets/images/ContactMap.png"
import VerticalLine from "../../assets/images/vertical-shape-line.png"


export const ContactUs = () => {
  return (
    <>
        <section className="py-5">
            <Container>
                <Row>
                    <Col md="6">
                        <img src={OrangeBox} alt="" width={"15px"} className="mb-3"/>
                        <h6>CONTACT US</h6>
                        <h2 className="fw-bold">Have a Question ?</h2>
                        <h2 className="fw-bold">Let's Get in Touch with us 👋</h2>
                        <p className="text text-muted">Fill up the Form and our team will get back to within 24 hrs</p>

                        <form>
                            <label htmlFor="">Name</label><br />
                            <input type="text" placeholder="Enter Your Name" defaultValue="Paresh Srichandran"className="input"/><br /><br />
                            <label htmlFor="">E-mail</label><br />
                            <input type="email" placeholder="Enter your E-mail" defaultValue="Paresh@pixeto.com" className="input"/><br /><br />
                            <label htmlFor="">Subject</label><br />
                            <input type="text" placeholder="Enter your Concern" defaultValue="For web design work enquire" className="input"/><br /><br />
                            <label htmlFor="">Message</label><br />
                            <input type="text" placeholder="Type your Message" className="input"/><br /><br />

                            <ButtonComponent text="Send Message"/>
                        </form>
                    </Col>
                    <Col md="4">
                        <div className="contact-header p-5 mt-4 position-relative">
                            <img src={VerticalLine} alt="" className="position-absolute bottom-0 start-0" height={"50%"} width={"5%"}/>
                            <p>Location</p> <hr />
                            <h6>DLF Cybercity, Bhubaneshwar,</h6>
                            <h6>India,&52050</h6>

                            <p>Working Hour</p> <hr />
                            <h6>Monday To Friday</h6>
                            <h6>9:00 AM to 8:00 PM</h6>
                            <p>Our Support Team is available 24Hrs</p>

                            <p>Contact Us</p> <hr />
                            <h6>020 7993 2905</h6>
                            <p>Hello@ether.com</p>

                            <img src={Facebook} alt="" className="p-2"/>
                            <img src={Twitter} alt="" className="p-2"/>
                            <img src={Instagram} alt="" className="p-2"/>
                            <img src={LinkedIn} alt="" className="p-2"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Image src={ContactMap} fluid/>
            </Container>
        </section>
    </>
  )
}
