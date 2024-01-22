import { Row, Col, Container } from "react-bootstrap";
import SvgButton from "../../assets/icons/button.svg";
import Image from "../../assets/images/vertical-shape-line.png";
import "./CTAcomponent.scss";

export const CTAcomponent = () => {
  return (
    <Container>
      <section className="cta-section position-relative mt-5">
        <img
          src={SvgButton}
          alt="button"
          className="svg position-absolute top-0 start-0"
        />
        <Row className="align-items-center p-5">
          <Col md={6} className="p-2">
            <h4 className="text-white">NEWSLETTER</h4>
            <h2 className="text-white fs-1">
              Subscribe Our News Letter to get latest updates.
            </h2>
          </Col>
          <Col md={6}>
            <input
              type="text"
              placeholder="Paresh@Pixeto.com"
              className="input"
            />
          </Col>
        </Row>
        <img
          src={Image}
          alt="vertical-shape-line"
          className="vertical-shape-line position-absolute top-0 end-0"
        />
      </section>
    </Container>
  );
};
