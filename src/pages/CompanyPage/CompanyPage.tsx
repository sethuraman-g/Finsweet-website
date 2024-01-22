import OrangeBox from "../../assets/icons/orangebox.svg";
import SVGButton from "../../assets/icons/rotateIcon.svg";
import AboutImage1 from "../../assets/images/AboutImage-1.png";
import AboutImage2 from "../../assets/images/AboutImage-2.png";
import AboutImage3 from "../../assets/images/AboutImage-3.png";
import HorizontalLine from "../../assets/images/horizontal-line.png";
import Box from "../../assets/icons/box.svg";
import SmallLine from "../../assets/icons/horizontalLine.svg";
import Logo1 from "../../assets/icons/blacklogo1.svg";
import Logo2 from "../../assets/icons/blacklogo2.svg";
import Logo3 from "../../assets/icons/blacklogo3.svg";
import Logo4 from "../../assets/icons/blacklogo4.svg";
import Logo5 from "../../assets/icons/blacklogo5.svg";
import CompanyVision from "../../assets/images/company-vision.png";
import TeamMember1 from "../../assets/images/TeamMember1.png";
import TeamMember2 from "../../assets/images/TeamMember2.png";
import TeamMember3 from "../../assets/images/TeamMember3.png";
import TeamMember4 from "../../assets/images/TeamMember4.png";
import TeamMember5 from "../../assets/images/TeamMember5.png";
import TeamMember6 from "../../assets/images/TeamMember6.png";
import TeamMember7 from "../../assets/images/TeamMember7.png";
import TeamMember8 from "../../assets/images/TeamMember8.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ExpertiseComponent } from "../../components/expertiseSection/ExpertiseComponent";
import "./CompanyPage.scss";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import { useState } from "react";
import Twitter from "../../assets/icons/tweetIcon.svg";
import Instagram from "../../assets/icons/instaIcon.svg";
import LinkedIn from "../../assets/icons/linkedInIcon.svg";
import { useNavigate } from "react-router-dom";

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

interface TeamMembersType {
  id: number;
  image: string;
}

const teamMembers: TeamMembersType[] = [
  { id: 1, image: TeamMember1 },
  { id: 2, image: TeamMember2 },
  { id: 3, image: TeamMember3 },
  { id: 4, image: TeamMember4 },
  { id: 5, image: TeamMember5 },
  { id: 6, image: TeamMember6 },
  { id: 7, image: TeamMember7 },
  { id: 8, image: TeamMember8 },
];

export const CompanyPage = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const navigateToTeamTemplatePage = (image: string) => {
    navigate("/teamTemplatePage", { state: image });
  };

  return (
    <>
      <Container className="py-5">
        <Row className="position-relative">
          <Col md={6}>
            <img src={OrangeBox} alt="orange box" width={15} className="mb-2" />
            <h5>COMPANY</h5>
            <h1 className="fw-bold">
              Award-winning Company seen and used by millions around the world.
            </h1>
            <p className="header-text text-muted">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
            <img
              src={SVGButton}
              alt="svg Icon"
              className="position-absolute end-0 top-0"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            sm={12}
            md={12}
            className="d-flex gap-2 justify-content-center position-relative"
          >
            <img src={AboutImage1} alt="aboutImage1" width={"33%"} />
            <img src={AboutImage2} alt="aboutImage2" width={"33%"} />
            <img src={AboutImage3} alt="aboutImage3" width={"33%"} />
            <img
              src={HorizontalLine}
              alt="horizontalLine"
              className="position-absolute horizontal-line-svg"
            />
          </Col>
        </Row>
      </Container>

      <section className="story-section">
        <Container>
          <Row>
            <Col md={6}>
              <img src={Box} alt="box" />
              <h6 className="my-3">Our Story 👇</h6>
              <h2 className="fw-bold">From Startups to Titans of Industry</h2>
              <p className="story-text text-muted">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense of gay
                produce excited perceived do an a china mean its so ye when in
                explained Hearts am next over match mr partiality not shoud
                latter thus as out no passed forming middleton exercise up
              </p>
            </Col>
            <Col md={6} className="story-background">
              <div className="stats">
                {companyStats.map((data) => {
                  return (
                    <div key={data?.title}>
                      <h4>{data.deliveredCount}</h4>
                      <img src={data.svg} alt="svgIcons" />
                      <h6>{data.title}</h6>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <Container className="logo-bar">
          <Row>
            <Col sm={12} md={12}>
              <img
                src={Logo1}
                alt="logo1"
                width={"20%"}
                className="logo-bars"
              />
              <img
                src={Logo2}
                alt="logo2"
                width={"20%"}
                className="logo-bars"
              />
              <img
                src={Logo3}
                alt="logo3"
                width={"20%"}
                className="logo-bars"
              />
              <img
                src={Logo4}
                alt="logo4"
                width={"20%"}
                className="logo-bars"
              />
              <img
                src={Logo5}
                alt="logo5"
                width={"20%"}
                className="logo-bars"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <ExpertiseComponent />

      <section className="our-vision-section py-5">
        <Container>
          <Row>
            <Col md={7}>
              <h5>OUR VISION</h5>
              <h2 className="fw-bold">
                We want to get local identification in every corner of the world
                in this era of global citizenship.
              </h2>
              <p className="text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </Col>
            <Col md={12} className="mt-4">
              <Image src={CompanyVision} alt="companyVision" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-team pt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5>MEET OUR TEAM</h5>
              <h2 className="fw-bold">Team work is the only way we work</h2>
              <p className="team-goal text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable.
              </p>
            </Col>

            <Col md={12}>
              <div className="team-members">
                {teamMembers.map((team) => {
                  return (
                    <div
                      className="team-members-list"
                      key={team?.id}
                      onClick={() => navigateToTeamTemplatePage(team?.image)}
                      onMouseOver={() => setShowDetails(team.id)}
                      onMouseOut={() => setShowDetails(null)}
                    >
                      <Image src={team.image} className="teamImage" fluid />
                      <div className="overlay">
                        {showDetails === team.id && (
                          <div>
                            <h6 className="text-white fw-bold">Javeno Melo</h6>
                            <p className="text-white">Support Assist</p>
                            <div className="social-icons">
                              <img src={Twitter} alt="twitter" />
                              <img src={Instagram} alt="instagram" />
                              <img src={LinkedIn} alt="linkedin" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CTAcomponent />
    </>
  );
};
