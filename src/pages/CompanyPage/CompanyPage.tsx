import "./CompanyPage.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import  ExpertiseComponent  from "../../components/expertiseSection/ExpertiseComponent";
import  CTAcomponent  from "../../components/ctaSection/CTAcomponent";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { databases, storage } from "../../components/appwriteConfig";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface CompanyStatsType {
  deliveredCount?: string;
  svg?: string;
  title?: string;
}

interface TeamMembersType  {
  id: number;
  image: string;
}
 const CompanyPage = () => {
  const bucketId = "images";

  const [companyStats, setCompanyStats] = useState<any>({ documents: [] });
  const [teamMembers, setTeamMembers] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchCompanyPageDatas = async () => {
      try {
        const companyStatsResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "CompanyStatsData"
        );
        setCompanyStats(companyStatsResponse);

        const teamMembersResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "TeamMembersData"
        );
        setTeamMembers(teamMembersResponse);
      } catch (error) {
        console.log("Error in fetching the company page datas", error);
      }
    };
    fetchCompanyPageDatas();
  }, []);

  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const navigateToTeamTemplatePage = (image: string) => {
    navigate("/company/team-template-page", { state: image });
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Container className="py-5">
        <Row className="position-relative">
          <Col md={6}>
            <img
              src={`${storage.getFilePreview(bucketId, "OrangeBox").href}`}
              alt="orange box"
              width={15}
              className="mb-2"
            />
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
              src={`${storage.getFilePreview(bucketId, "RotatedIcon").href}`}
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
            <img
              src={`${storage.getFilePreview(bucketId, "AboutImage-1").href}`}
              alt="aboutImage1"
              width="33%"
            />
            <img
              src={`${storage.getFilePreview(bucketId, "AboutImage-2").href}`}
              alt="aboutImage2"
              width="33%"
            />
            <img
              src={`${storage.getFilePreview(bucketId, "AboutImage-3").href}`}
              alt="aboutImage3"
              width="33%"
            />
            <img
              src={`${
                storage.getFilePreview(bucketId, "horizontal-line").href
              }`}
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
              <img
                src={`${storage.getFilePreview(bucketId, "BlueBox")}`}
                alt="box"
              />
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
                {companyStats?.documents.map((data: CompanyStatsType) => {
                  return (
                    <div key={data?.title}>
                      <h4>{data.deliveredCount}</h4>
                      <img
                        src={`../../src/assets/images/${data.svg}`}
                        alt="svgIcons"
                      />
                      <h6>{data.title}</h6>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="logo-bars my-5">
        <Container className="logo-bar">
          <Row>
            <Col sm={12} md={12} className="logos">
              <img
                src={`${storage.getFilePreview(bucketId, "Logo1").href}`}
                alt="logo1"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview(bucketId, "Logo2").href}`}
                alt="logo2"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview(bucketId, "Logo3").href}`}
                alt="logo3"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview(bucketId, "Logo4").href}`}
                alt="logo4"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview(bucketId, "Logo5").href}`}
                alt="logo5"
                width={"20%"}
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
              <Image
                src={`${
                  storage.getFilePreview(bucketId, "company-vision").href
                }`}
                alt="companyVision"
                fluid
              />
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
                {teamMembers?.documents.map((team: TeamMembersType) => {
                  return (
                    <div
                      className="team-members-list"
                      key={team?.id}
                      onClick={() => navigateToTeamTemplatePage(team?.image)}
                      onMouseOver={() => setShowDetails(team.id)}
                      onMouseOut={() => setShowDetails(null)}
                    >
                      <Image
                        src={`../../src/assets/images/CompanyTeam/${team.image}`}
                        className="teamImage"
                        fluid
                      />
                      <div className="overlay">
                        {showDetails === team.id && (
                          <div>
                            <h6 className="text-white fw-bold">Javeno Melo</h6>
                            <p className="text-white">Support Assist</p>
                            <div className="social-icons d-flex gap-2">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ color: "white" }}
                              />
                              <FontAwesomeIcon
                                icon={faInstagram}
                                style={{ color: "white" }}
                              />
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ color: "white" }}
                              />
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
export default CompanyPage;