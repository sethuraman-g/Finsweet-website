import "./PopupPage.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import CloseIcon from "../../assets/icons/closeicon.svg";

export const PopupPage = () => {
  return (
    <>
        <section className="">
            <Container className=" bg-light">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md="6" className="px-5 py-3 bg-white position-relative"> 
                        <img src={CloseIcon} alt="" className="close-icon position-absolute"/>
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
                </Row>
            </Container>
        </section>
    </>
  )
}
