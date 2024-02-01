import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { storage } from "../appwriteConfig";
import "./FooterComponent.scss";

export const FooterComponent = () => {
  const bucketId = "images";
  return (
    <>
      <Container className="mt-5 position-relative">
        <Row>
          <Col xs={6} sm={6} md={3}>
            <div>
              <img
                src={`${storage.getFilePreview(bucketId, "InsideButtonIcon")}`}
                alt="buttonSvg"
                className="pb-3"
                width={40}
              />
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
          <img
            src={`${storage.getFilePreview(bucketId, "horizontal-shape").href}`}
            alt="Shape-In-Button"
          />{" "}
          Contact Us &#8594;
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
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="social-media-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="social-media-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button className="social-media-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
