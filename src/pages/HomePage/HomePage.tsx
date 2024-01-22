import { ExpertiseComponent } from "../../components/expertiseSection/ExpertiseComponent";
import { OurProcessComponent } from "../../components/ourProcess/OurProcessComponent";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import { Col, Container, Row } from "react-bootstrap";
import Box from "../../assets/icons/box.svg";
import HeroBox from "../../assets/icons/heroBox.svg";
import HeaderHeroImage from "../../assets/images/header-hero-image.png";
import Logo1 from "../../assets/icons/logoipsum1.svg";
import Logo2 from "../../assets/icons/logoipsum2.svg";
import Logo3 from "../../assets/icons/logoipsum3.svg";
import Logo4 from "../../assets/icons/logoipsum4.svg";
import Logo5 from "../../assets/icons/logoipsum5.svg";
import AboutImage1 from "../../assets/images/AboutImage-1.png";
import AboutImage2 from "../../assets/images/AboutImage-2.png";
import AboutImage3 from "../../assets/images/AboutImage-3.png";
import VerticalLine from "../../assets/images/vertical-shape-line.png";
import SmallLine from "../../assets/icons/horizontalLine.svg";
import HeadPhone from "../../assets/icons/headPhone.svg";
import Setting from "../../assets/icons/settings.svg";
import Development from "../../assets/icons/development.svg";
import Discussion from "../../assets/images/discussion.png";
import DoubtClarification from "../../assets/images/doubt-clarification.png";
import JohnnyAndro from "../../assets/icons/JhonnyAndro.svg";
import JavenoMelo from "../../assets/icons/JavenoMelo.svg";
import AndrewJonson from "../../assets/icons/AndrewJonson.svg";
import DoubleSlash from "../../assets/icons/doubleSlash.svg";
import { useState } from "react";
import { PopupPage } from "../PopupPage/PopupPage";
import "./HomePage.scss";

interface ServicesList {
  svg?: string;
  servicesTitle?: string;
  description?: string;
}

const ourCompanyServicesLists: ServicesList[] = [
  {
    svg: HeadPhone,
    servicesTitle: "Technical support",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world",
  },
  {
    svg: Setting,
    servicesTitle: "Testing Management",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world",
  },
  {
    svg: Development,
    servicesTitle: "Development",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world",
  },
];

interface DataList {
  deliveredCount?: string;
  svg?: string;
  title?: string;
}

const companyStats: DataList[] = [
  {
    deliveredCount: "1560+",
    svg: SmallLine,
    title: "Project Delivered",
  },
  {
    deliveredCount: "100+",
    svg: SmallLine,
    title: "Professional",
  },
  {
    deliveredCount: "950+",
    svg: SmallLine,
    title: "Happy Client",
  },
  {
    deliveredCount: "10yrs",
    svg: SmallLine,
    title: "Experience",
  },
];

export const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="hero-section py-5">
        <Container>
          <Row>
            <Col md={6} className="py-5">
              <img src={HeroBox} alt="box" className="mb-3" width={20} />
              <h1 className="hero-title text-white fw-bold">
                Transform Your idea into Reality with Finsweet
              </h1>
              <p className="hero-description text-white">
                The entire Finsweet team knows what's good with Webflow and you
                can too with 1 week and a good attitude.
              </p>
              <ButtonComponent
                text="Request a Quote"
                handleClick={handleShow}
              />
              <PopupPage open={show} close={handleClose} />
              {/*****POPUP-Message*****/}
            </Col>
            <Col md={6} className="hero-image d-flex justify-content-center">
              <img src={HeaderHeroImage} alt="headerHero" width={"65%"} />
            </Col>
          </Row>

          <Row className="py-5">
            <Col md={3}>
              <p className="hero-sub-title text-white">Our Clients</p>
              <h5 className="hero-clients text-white">We've Worked with</h5>
            </Col>
            <Col md={9}>
              <img src={Logo1} alt="logo1" width={"20%"} />
              <img src={Logo2} alt="logo2" width={"20%"} />
              <img src={Logo3} alt="logo3" width={"20%"} />
              <img src={Logo4} alt="logo4" width={"20%"} />
              <img src={Logo5} alt="logo5" width={"20%"} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-us-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h5>ABOUT US</h5>
              <h1 className="fw-bold">
                The company leads entire webdesign process from concept to
                delivery.
              </h1>
            </Col>
            <Col md={6} className="pt-4">
              <h3 className="fw-bold">The Era Of Technology.</h3>
              <p className="text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col sm={12} md={12} className="d-flex gap-2 position-relative">
              <img src={AboutImage1} alt="aboutImage1" width="33%" />
              <img src={AboutImage2} alt="aboutImage2" width="33%" />
              <img src={AboutImage3} alt="aboutImage3" width="33%" />
              <img
                src={VerticalLine}
                alt="verticalLine"
                className="vertical-line position-absolute end-0"
              />
            </Col>
            <Col sm md={8} className="mt-3">
              <div className="company-stats">
                {companyStats.map((eachStat) => {
                  return (
                    <div key={eachStat?.title}>
                      <h4>{eachStat.deliveredCount}</h4>
                      <img src={eachStat.svg} alt="svgIcons" />
                      <h6>{eachStat.title}</h6>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ExpertiseComponent />

      <section className="our-services-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h5>OUR SERVICES</h5>
              <h1 className="mb-4">
                We build software solutions that solve client's business
                challenges
              </h1>
              <ButtonComponent text="Start a Project" />
            </Col>
          </Row>
          <Row className="pt-5">
            <Col md={12}>
              <div className="service-section-list">
                {ourCompanyServicesLists.map((list) => {
                  return (
                    <div
                      className="service-provider py-4 px-5"
                      key={list?.servicesTitle}
                    >
                      <img src={list.svg} alt="svgIcon" className="pb-2" />
                      <h6>{list.servicesTitle}</h6>
                      <p className="text-muted">{list.description}</p>
                      <ReadMoreButtonComponent text="Read more" />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <OurProcessComponent />

      <section className="testimonial-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src={Box} alt="box" />
              <h2 className="fw-bold mt-2">Our customers love</h2>
              <h2 className="fw-bold mb-2"> what we do</h2>
              <p>Transform your idea into reality with finsweet</p>
              <p className="text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div>
                <img src={JohnnyAndro} alt="Johnny Andro" className="px-1" />
                <img src={JavenoMelo} alt="Javeno Melo" className="px-1" />
                <img src={AndrewJonson} alt="Andrew Jonson" className="px-1" />
              </div>
              <p className="fw-bold">30+ Customer Reviews</p>
            </Col>
            <Col md={5} className="testimonial-partner p-5 position-relative">
              <img
                src={VerticalLine}
                alt="verticalLine"
                className="vertical-line position-absolute start-0 top-0"
              />
              <img
                src={DoubleSlash}
                alt="doubleSlash"
                className="position-absolute double-slash"
              />
              <h5 className="fw-bold mb-4">
                Finsweet has been a wonderful partner to work with. I have been
                a customer now for the past few months now and I have had
                nothing but positive experiences!
              </h5>
              <div className="d-flex gap-2">
                <img src={JohnnyAndro} alt="Johnny Andro" />
                <div>
                  <span className="fw-bold">Johnny Andro</span>
                  <br />
                  <span>Director,Company</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-section py-5">
        <Container>
          <Row className="mb-2">
            <Col>
              <img src={Box} alt="box" className="mb-3" />
              <h2 className="fw-bold">Read our latest blogs & news</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between align-items-center blog">
            <Col sm={12} md={6}>
              <div className="d-flex">
                <img
                  src={Discussion}
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
                  src={DoubtClarification}
                  alt="doubt Clarification"
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

      <CTAcomponent />
    </>
  );
};
