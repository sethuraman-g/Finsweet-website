import { Col, Container, Row } from "react-bootstrap";
import "./OurProcessComponent.scss";
import Bulb from "../../assets/icons/bulb.svg";
import Notes from "../../assets/icons/notes.svg";
import Tags from "../../assets/icons/tags.svg";
import Head from "../../assets/icons/head.svg";
import Jet from "../../assets/icons/jet.svg";
import Tool from "../../assets/icons/tool.svg";
import Button from "../../assets/icons/button.svg";
import ShapeLine from "../../assets/images/horizontal-line.png";

interface ProcessListDataType {
  icon?: string;
  number?: number;
  title?: string;
  description?: string;
  image?: string;
}

const processFlowDatas: ProcessListDataType[] = [
  {
    icon: Bulb,
    number: 1,
    title: "Discover",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    image: ShapeLine,
  },
  {
    icon: Notes,
    number: 2,
    title: "Designing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: Tags,
    number: 3,
    title: "Development",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: Head,
    number: 4,
    title: "Testing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: Jet,
    number: 5,
    title: "Deployment",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    icon: Tool,
    number: 6,
    title: "Maintanence",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    image: ShapeLine,
  },
];

export const OurProcessComponent = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="position-relative">
          <Col md={6}>
            <h5>OUR PROCESS</h5>
            <h2>The process we are working With Our client Worldwide</h2>
            <p className="text-muted">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </Col>
          <img
            src={Button}
            alt="button"
            className="icon-rotation position-absolute end-0"
          />
        </Row>
        <Row>
          <Col className="process-flow">
            {processFlowDatas.map((data) => {
              return (
                <div
                  className="each-process-data d-flex gap-3 position-relative"
                  key={data?.title}
                >
                  <div>
                    <img src={data.icon} alt="processIcons" />
                    <span className="number position-absolute">
                      {data.number}
                    </span>
                  </div>
                  <div>
                    <h6 className="fw-bold">{data.title}</h6>
                    <p className="text-muted">{data.description}</p>
                  </div>
                  <img
                    src={data.image}
                    alt="processDatas"
                    className="img start-0"
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
