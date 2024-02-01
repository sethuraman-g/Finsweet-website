import "./CareerPage.scss";
import ButtonSvg from "../../assets/icons/button.svg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import { useNavigate } from "react-router-dom";
import { databases, storage } from "../../components/appwriteConfig";
import { useEffect, useState } from "react";

export const CareerPage = () => {
  const bucketId = "images";

  const [careerRoles, setCareerRoles] = useState<any>({ documents: [] });
  const [workCultures, setWorkCultures] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchCareerPageDatas = async () => {
      try {
        const careerRolesResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "CareerRolesData"
        );
        setCareerRoles(careerRolesResponse);

        const workCulturesResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "WorkCulturesData"
        );
        setWorkCultures(workCulturesResponse);
      } catch (error) {
        console.log("Error in fetching the career page datas", error);
      }
    };
    fetchCareerPageDatas();
  }, []);

  const navigate = useNavigate();
  const navigateToCareerRoles = (title: string) => {
    navigate(`/Career/${title}`);
  };

  return (
    <>
      <section className="career-header py-5">
        <Container className="position-relative">
          <Row>
            <Col>
              <div className="career-section d-flex flex-column align-items-center">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "RotatedIcon").href
                  }`}
                  alt="button"
                  className="position-absolute end-0"
                />
                <h5>CAREER AT FINSWEET</h5>
                <h2 className="fw-bold">We hired people who are</h2>
                <h2 className="fw-bold">Always Passionate about</h2>
                <h2 className="fw-bold">what they do</h2>
                <p className="text-muted">
                  Through True Rich Attended does no end it his mother since
                  real had half <br />
                  every him case in packages enquire we up ecstatic unsatiable
                  saw .
                </p>
                <Image
                  src={`${
                    storage.getFilePreview(bucketId, "Career-Image").href
                  }`}
                  alt="career"
                  fluid
                />
                <h6 className="mt-5">See our open positions</h6>
                <p>👇</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="careers-section mb-5">
          <Row>
            <Col md={12}>
              <div className="career-roles">
                {careerRoles?.documents.map((role: any) => {
                  return (
                    <div className="each-career-role" key={role.title}>
                      <h5>{role.title}</h5>
                      <p className="text-muted">{role.description}</p>
                      <p className="text-muted">{role.salary}</p>
                      <ReadMoreButtonComponent
                        text="Apply Now"
                        handleClick={() => navigateToCareerRoles(role.title)}
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-culture py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h6>OUR WORK & CULTURE</h6>
              <h2 className="fw-bold">
                Come and join a team of highly skilled professionals.
              </h2>
              <p className="text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </Col>
            <Col md={12} className="pt-4">
              <div className="work-cultures">
                {workCultures?.documents.map((eachWork: any) => {
                  return (
                    <div className="culture p-4" key={eachWork?.title}>
                      <img
                        src={`../../src/assets/images/workCultureIcons/${eachWork.svg}`}
                        alt="svgIcons"
                      />
                      <h6 className="fw-bold pt-2">{eachWork.title}</h6>
                      <p className="culture-text text-muted">
                        {eachWork.description}
                      </p>
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
