import "./HomePage.scss";
import  ExpertiseComponent  from "../../components/expertiseSection/ExpertiseComponent";
import  OurProcessComponent  from "../../components/ourProcess/OurProcessComponent";
import  CTAcomponent  from "../../components/ctaSection/CTAcomponent";
import  ButtonComponent  from "../../components/button/ButtonComponent";
import  ReadMoreButtonComponent  from "../../components/button/ReadMoreButtonComponent";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import  PopupPage  from "../PopupPage/PopupPage";
import { databases, storage } from "../../components/appwriteConfig";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
interface CompanyStatsType {
  deliveredCount?: string;
  svg?: string;
  title?: string;
}

interface OurServicesListsType {
  servicesTitle: string;
  description: string;
  svg: string;
}
interface TestimonialsType {
  title: string;
  personImage: string;
  personName: string;
  personDetails: string;
}

 const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const navigateToBlogPage = () => {
    navigate("/blog");
  };
  const navigateToCompanyPage = () => {
    navigate("/company");
  };
  const navigateToServicePage = () => {
    navigate("/service");
  }

  const bucketId = "images";

  const [companyStats, setCompanyStats] = useState<any>({ documents: [] });
  const [ourCompanyServicesLists, setOurCompanyServicesLists] = useState<any>({
    documents: [],
  });
  const [testimonialData, setTestimonialData] = useState<any>({
    documents: [],
  });

  useEffect(() => {
    const fetchHomePageDatas = async () => {
      try {
        const companyStatsResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "CompanyStatsData"
        );
        setCompanyStats(companyStatsResponse);

        const serviceListResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "65b1f738902e2fc505bd"
        );
        setOurCompanyServicesLists(serviceListResponse);

        const testimonialDataResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "TestimonialsData"
        );
        setTestimonialData(testimonialDataResponse);
      } catch (error) {
        console.error("Error in fetching the home page datas:", error);
      }
    };
    fetchHomePageDatas();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="hero-section py-5">
        <Container>
          <Row>
            <Col md={6} className="py-5">
              <img
                src={`${storage.getFilePreview(bucketId, "GreyBox")}`}
                alt="box"
                className="mb-3"
                width={20}
              />
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
              <img
                src={`${
                  storage.getFilePreview(bucketId, "header-hero-image").href
                }`}
                alt="headerHero"
                width={"65%"}
              />
            </Col>
          </Row>

          <Row className="py-5">
            <Col md={3}>
              <p className="hero-sub-title text-white">Our Clients</p>
              <h5 className="hero-clients text-white">We've Worked with</h5>
            </Col>
            <Col md={9}>
              <img
                src={`${storage.getFilePreview("images", "logoipsum1").href}`}
                alt="logo1"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview("images", "logoipsum2").href}`}
                alt="logo2"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview("images", "logoipsum3").href}`}
                alt="logo3"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview("images", "logoipsum4").href}`}
                alt="logo4"
                width={"20%"}
              />
              <img
                src={`${storage.getFilePreview("images", "logoipsum5").href}`}
                alt="logo5"
                width={"20%"}
              />
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
                  storage.getFilePreview(bucketId, "vertical-shape-line").href
                }`}
                alt="verticalLine"
                className="vertical-line position-absolute end-0"
              />
            </Col>
            <Col sm md={8} className="mt-3">
              <div className="company-stats">
                {companyStats?.documents.map((eachStat: CompanyStatsType) => {
                  return (
                    <div key={eachStat?.title}>
                      <h4>{eachStat.deliveredCount}</h4>
                      <img
                        src={`../../src/assets/images/${eachStat.svg}`}
                        alt="svgIcons"
                      />
                      <h6>{eachStat.title}</h6>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col sm md={4} className="d-flex justify-content-end">
              <ReadMoreButtonComponent
                text="Read about us"
                handleClick={navigateToCompanyPage}
              />
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
                {ourCompanyServicesLists?.documents.map((list: OurServicesListsType) => {
                  return (
                    <div
                      className="service-provider py-4 px-5"
                      key={list?.servicesTitle}
                    >
                      <img
                        src={`../src/assets/images/${list.svg}`}
                        alt="svgIcon"
                        className="pb-2"
                      />
                      <h6>{list.servicesTitle}</h6>
                      <p className="text-muted">{list.description}</p>
                      <ReadMoreButtonComponent text="Read more" handleClick={navigateToServicePage}/>
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
              <img
                src={`${storage.getFilePreview(bucketId, "BlueBox")}`}
                alt="box"
              />
              <h2 className="fw-bold mt-2">Our customers love</h2>
              <h2 className="fw-bold mb-2"> what we do</h2>
              <p>Transform your idea into reality with finsweet</p>
              <p className="text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div>
                <img
                  src={`${
                    storage.getFilePreview("images", "JohnnyAndro").href
                  }`}
                  alt="Johnny Andro"
                  className="px-1"
                />
                <img
                  src={`${storage.getFilePreview("images", "JavenaMelo").href}`}
                  alt="Javeno Melo"
                  className="px-1"
                />
                <img
                  src={`${
                    storage.getFilePreview("images", "AndrewJonson").href
                  }`}
                  alt="Andrew Jonson"
                  width={55}
                  className="px-1"
                />
              </div>
              <p className="fw-bold">30+ Customer Reviews</p>
            </Col>
            <Col md={5} className="testimonial-partner p-5 position-relative">
              <img
                src={`${
                  storage.getFilePreview("images", "vertical-shape-line").href
                }`}
                alt="verticalLine"
                className="vertical-line position-absolute start-0 top-0"
              />
              <img
                src={`${storage.getFilePreview("images", "slash").href}`}
                alt="slash"
                className="position-absolute top-0 end-0"
              />
              <img
                src={`${storage.getFilePreview("images", "Logo").href}`}
                alt="Testimonial Logo"
                className="position-absolute end-0 bottom-0"
              />
              <Slider {...settings}>
                {testimonialData?.documents.map((slideData: TestimonialsType) => {
                  return (
                    <div key={slideData?.personName}>
                      <h5 className="fw-bold mb-4">{slideData.title}</h5>
                      <div className="d-flex gap-2">
                        <img
                          src={`../../src/assets/images/${slideData.personImage}`}
                          alt="Johnny Andro"
                        />
                        <div>
                          <span className="fw-bold">
                            {slideData.personName}
                          </span>
                          <br />
                          <span>{slideData.personDetails}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-section py-5">
        <Container>
          <Row className="mb-2">
            <Col>
              <img
                src={`${storage.getFilePreview(bucketId, "BlueBox")}`}
                alt="box"
                className="mb-3"
              />
              <h2 className="fw-bold">Read our latest blogs & news</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between align-items-center blog">
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
                  <ReadMoreButtonComponent
                    text="Read more"
                    handleClick={navigateToBlogPage}
                  />
                </div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className="d-flex">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "doubt-clarification").href
                  }`}
                  alt="doubt Clarification"
                  className="blog-img"
                  width={"40%"}
                />
                <div className="bg-white p-4 blog-description">
                  <p>Jan 19, 2021</p>
                  <h5>A practical guide to building a brand strategy</h5>
                  <ReadMoreButtonComponent
                    text="Read more"
                    handleClick={navigateToBlogPage}
                  />
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
export default HomePage;