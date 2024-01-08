import { Col, Container, Image, Row } from "react-bootstrap";
import Box from "../../assets/icons/box.svg"
import Discussion from "../../assets/images/discussion.png"
import DoubtClarification from "../../assets/images/doubt-clarification.png"
import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import JavenaMelo from "../../assets/images/TeamMember3.png"
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Twitter from "../../assets/icons/twitter.svg"
import "./CompanyPage.scss";

export const TeamTemplatePage = () => {
  return (
    <>

        <section>
            <Container className="py-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={4} className="team-member">
                        <Image src={JavenaMelo} roundedCircle fluid/>
                        <h2>Javeno Melo</h2>
                        <span>CEO</span>
                        <p className="text-muted mt-2">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                        <div className="social-media-icons">
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Instagram} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="team-template-page">
            <Container>
                <Row className="pt-5">
                    <Col>
                        <img src={Box} alt="" className="mt-2"/>
                        <h2 className="mt-2 mb-2">Blog posts from Javena</h2>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between align-items-center blog pb-5">
                    <Col sm="12" md="6">
                        <div className="d-flex">
                        <img src={Discussion} alt="" className="blog-img" width={"40%"}/>
                        <div className="bg-white p-4 blog-description">
                            <p>Jan 19, 2021</p>
                            <h5>Today's best design trends for digital products</h5>
                            <ReadMoreButtonComponent text="Read more"/>
                        </div>
                        </div>
                    </Col>

                    <Col sm="12" md="6">
                        <div className="d-flex">
                        <img src={DoubtClarification} alt="" className="blog-img" width={"40%"}/>
                        <div className="bg-white p-4 blog-description">
                            <p>Jan 19, 2021</p>
                            <h5>A practical guide to building a brand strategy</h5>
                            <ReadMoreButtonComponent text="Read more"/>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
