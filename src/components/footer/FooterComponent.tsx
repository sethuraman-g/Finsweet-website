import { Col, Container, Row } from "react-bootstrap";
import SVG from "../../assets/icons/button.svg";
import ShapeImage from "../../assets/images/horizontal-shape.png";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import "./FooterComponent.scss";

export const FooterComponent = () => {
  return (
    <>
      <Container className="mt-5 position-relative">
        <Row>
          <Col xs={6} sm={6} md={3}>
            <div>
              <img src={SVG} alt="buttonSvg" className="pb-3" />
              <h2>Let's make something special</h2>
              <h5>Let's talk!🤙</h5>
              <p>020 7993 2905</p>
              <p>hi@finsweet.com</p>
              <hr />
              <span>
                DLF Cybercity,Bhubaneshwar,
                <br />
                India, &52050
              </span>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="footer-column pt-5">
              <a href="/" className="footer-link">
                Home
              </a>
              <a href="/Service" className="footer-link">
                Service
              </a>
              <a href="/Company" className="footer-link">
                Company
              </a>
              <a href="/Career" className="footer-link">
                Career
              </a>
              <a href="/Blog" className="footer-link">
                News
              </a>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="pt-5">
              <a href="/Service" className="footer-link">
                Service
              </a>
              <a href="/Service" className="service-link">
                Technical Support
              </a>
              <a href="/Service" className="service-link">
                Testing
              </a>
              <a href="/Service" className="service-link">
                Development
              </a>
              <a href="/Service" className="service-link">
                AWS/Azure
              </a>
              <a href="/Service" className="service-link">
                Consulting
              </a>
              <a href="/Service" className="service-link">
                Information Technology
              </a>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3}>
            <div className="pt-5">
              <a href="/Career" className="footer-link">
                Resources
              </a>
              <a href="/Company" className="resources-link">
                About us
              </a>
              <a href="/Blog" className="resources-link">
                Testimonial
              </a>
              <a href="/PrivacyPolicy" className="resources-link">
                Privacy Policy
              </a>
              <a href="/PrivacyPolicy" className="resources-link">
                Terms of use
              </a>
              <a href="/Blog" className="resources-link">
                Blog
              </a>
            </div>
          </Col>
        </Row>
        <a
          className="footer-button position-absolute end-0 bottom-0"
          href="/ContactUs"
        >
          <img src={ShapeImage} alt="Shape-In-Button" /> Contact Us &#8594;
        </a>
      </Container>

      <section className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={8} md={6} className="d-flex">
              <h3>&#123;Finsweet</h3>
              <h5 className="footer-copyright pt-1">&#169; 2021 Finsweet</h5>
            </Col>
            <Col
              xs={8}
              sm={4}
              md={6}
              className="footer-icons d-flex gap-3 justify-content-end"
            >
              <button className="social-media-icon">
                <img src={Facebook} alt="facebook" />
              </button>
              <button className="social-media-icon">
                <img src={Twitter} alt="twitter" />
              </button>
              <button className="social-media-icon">
                <img src={Instagram} alt="instagram" />
              </button>
              <button className="social-media-icon">
                <img src={Linkedin} alt="linkedin" />
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
