import "./ServicePage.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { OurProcessComponent } from "../../components/ourProcess/OurProcessComponent";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import { PopupPage } from "../PopupPage/PopupPage";
import { useEffect, useState } from "react";
import { databases } from "../../components/appwriteConfig";

export const ServicePage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [serviceListFeatures, setServiceListFeatures] = useState<any>({
    documents: [],
  });
  useEffect(() => {
    const fetchServicePageDatas = async () => {
      try {
        const serviceListResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "serviceListFeatures"
        );
        setServiceListFeatures(serviceListResponse);
      } catch (error) {
        console.log("Error in fetching the service page datas", error);
      }
    };
    fetchServicePageDatas();
  }, []);

  return (
    <>
      <section className="our-services py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h5>OUR SERVICES</h5>
              <h1 className="fw-bold">
                We Build Software Solutionthat Solve Clients Business Challenges
              </h1>
              <p className="text-muted">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.
              </p>
              <ButtonComponent
                text="Request A Quote"
                handleClick={handleShow}
              />
              <PopupPage open={show} close={handleClose} />
              {/*****Popup-Page*****/}
            </Col>
            <Col
              md={6}
              className="services d-flex flex-column justify-content-center"
            >
              {serviceListFeatures?.documents.map((feature: any) => {
                return (
                  <a
                    href={`#${feature.id}`}
                    className="service-link"
                    key={feature?.id}
                  >
                    {feature.title}
                  </a>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="process-section">
        <OurProcessComponent />
      </section>

      {/* Features Section Map List */}
      {serviceListFeatures?.documents.map((eachFeatureList: any) => {
        return (
          <section
            className="features-part"
            key={eachFeatureList?.title}
            style={{ background: `${eachFeatureList.background}` }}
            id={eachFeatureList.id}
          >
            <Container className="pb-5">
              <Row className="d-flex">
                <div className="pt-5 col-md-6">
                  <h5>{eachFeatureList.title}</h5>
                  <h2 className="fw-bold">{eachFeatureList.subTitle}</h2>
                  <p className="feature-description text-muted">
                    {eachFeatureList.description}
                  </p>
                </div>
                <div className="feature-images d-flex justify-content-end col-md-6">
                  <img
                    src={`../../src/assets/images/serviceListFeatures/${eachFeatureList.image}`}
                    alt="eachFeature"
                    width={"65%"}
                  />
                </div>
              </Row>
            </Container>
          </section>
        );
      })}

      <CTAcomponent />
    </>
  );
};
