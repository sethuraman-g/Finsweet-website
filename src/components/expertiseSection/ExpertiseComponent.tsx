import { Col, Container, Row } from "react-bootstrap";
import RocketDelivery from "../../assets/icons/rocket.svg";
import QualitySettings from "../../assets/icons/settings.svg";
import SupportAssist from "../../assets/icons/support.svg";
import Box from "../../assets/icons/box.svg";
import HorizontalLine from "../../assets/images/horizontal-line.png";
import "./ExpertiseComponent.scss";

interface ExpertiseListType {
  icon?: string;
  title?: string;
  description?: string;
}

const expertiseList: ExpertiseListType[] = [
  {
    icon: RocketDelivery,
    title: "On Time Delivery",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    icon: QualitySettings,
    title: "Best Quality",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    icon: SupportAssist,
    title: "Support Assist",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
];

export const ExpertiseComponent = () => {
  return (
    <>
      <section className="our-expertise-section">
        <Container>
          <Row className="d-flex">
            <Col md={6}>
              <h4>OUR EXPERTISE</h4>
              <h2 className="expertise-title fw-bold">
                We want to get local identification in every corner of the world
                in this era of global citizenship
              </h2>
              <p className="expertise-paragraph text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </Col>
            <Col md={6}>
              <div className="expertise-container position-relative">
                <img
                  src={Box}
                  alt="empty-box"
                  className="box position-relative"
                />
                <img
                  src={HorizontalLine}
                  alt="horizontal-line-shape"
                  className="horizontal-line position-absolute start-0 bottom-0"
                />
                {expertiseList.map((item) => {
                  return (
                    <div
                      className="expertise-skills d-flex mb-2"
                      key={item?.title}
                    >
                      <div>
                        <img
                          src={item.icon}
                          alt="expertise-items"
                          className="expertise-image"
                        />
                      </div>
                      <div className="expertise-text">
                        <h6 className="fw-bold">{item.title}</h6>
                        <p className="text-muted">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
