import "./CompanyPage.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { storage } from "../../components/appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const TeamTemplatePage = () => {
  const bucketId = "images";

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <section>
        <Container className="py-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={4} className="team-member">
              <Image
                src={`../../src/assets/images/CompanyTeam/${location?.state}`}
                roundedCircle
                fluid
              />
              <h2>Javeno Melo</h2>
              <span>CEO</span>
              <p className="text-muted mt-2">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable.
              </p>
              <div className="d-flex gap-2 social-media-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-template-page">
        <Container>
          <Row className="pt-5">
            <Col>
              <img
                src={`${storage.getFilePreview(bucketId, "BlueBox").href}`}
                alt="box"
                className="mt-2"
              />
              <h2 className="mt-2 mb-2">Blog posts from Javena</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between align-items-center blog pb-5">
            <Col sm={12} md={6}>
              <div className="d-flex">
                <img
                  src={`${storage.getFilePreview(bucketId, "discussion").href}`}
                  alt="discussion"
                  className="blog-img"
                  width={"40%"}
                />
                <div className="bg-white p-4 blog-description">
                  <p>Jan 19, 2021</p>
                  <h5>Today's best design trends for digital products</h5>
                  <ReadMoreButtonComponent text="Read more" />
                </div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className="d-flex">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "doubt-clarification").href
                  }`}
                  alt="clarification"
                  className="blog-img"
                  width={"40%"}
                />
                <div className="bg-white p-4 blog-description">
                  <p>Jan 19, 2021</p>
                  <h5>A practical guide to building a brand strategy</h5>
                  <ReadMoreButtonComponent text="Read more" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
