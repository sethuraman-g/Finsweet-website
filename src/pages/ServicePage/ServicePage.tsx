import { Col, Container, Row } from "react-bootstrap"
import { ButtonComponent } from "../../components/button/ButtonComponent"
import { Link } from "react-router-dom"
import { OurProcessComponent } from "../../components/ourProcess/OurProcessComponent"
import TechnicalSupport from "../../assets/images/Technical Support.png"
import Development from "../../assets/images/Development Service.png"
import AWS_Azure from "../../assets/images/AWS-Azure.png"
import Consulting from "../../assets/images/Consulting.png"
import InformationTechnology from "../../assets/images/Information Technology.png"
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent"
import "./ServicePage.scss";


interface FeatureType {
  image?: string,
  title?: string,
  subTitle?: string,
  description?: string,
  background?: string
}
const serviceListFeatures: FeatureType[] = [
  {
    image : TechnicalSupport,
    title : "Technical Support",
    subTitle : "Best in class tech support for your company. We become your tech backbone",
    description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
  },
  {
    image : Development,
    title : "Development",
    subTitle : "Bring your ideas to reality with certified team of developers, working with latest technologies",
    description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    background: "#ECF8F9"
  },
  {
    image : AWS_Azure,
    title : "AWS/Azure",
    subTitle : "We help you deploy, manage and secure your application on leading web services",
    description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
  },
  {
    image : Consulting,
    title : "Consulting",
    subTitle : "Get advice from world class professionals",
    description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    background: "#F9F9FF"
  },
  {
    image : InformationTechnology,
    title : "Information Technology",
    subTitle : "We want to get local identification in every corner of the world in this era of global citizenship.",
    description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
  }
]

export const ServicePage = () => {
  return (
    <>
    <section className="our-services py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>OUR SERVICES</h5>
            <h1 className="fw-bold">We Build Software Solutionthat Solve Clients Business Challenges</h1>
            <p className="text-muted">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
            <ButtonComponent text="Request A Quote"/>
          </Col>
          <Col md={6} className="services d-flex flex-column justify-content-center">
            <Link to="/" className="service-link">Technical Support</Link>
            <Link to="/" className="service-link">Development &#8594;</Link>
            <Link to="/" className="service-link">AWS/Azure</Link>
            <Link to="/" className="service-link">Consulting</Link>
            <Link to="/" className="service-link">Information Technology</Link>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="process-section">
      <OurProcessComponent/>
    </section>

    {/* Features Section Map List */}  
    {
      serviceListFeatures.map((eachFeatureList) => {  
        return(
          <section className="features-part" key={eachFeatureList?.title} style={{background:`${eachFeatureList.background}`}}>
            <Container className="pb-5">
              <Row className="d-flex">
                <div className="pt-5 col-md-6">
                  <h5>{eachFeatureList.title}</h5>
                  <h2 className="fw-bold">{eachFeatureList.subTitle}</h2>
                  <p className="feature-description text-muted">{eachFeatureList.description}</p>
                </div>
                <div className="feature-images d-flex justify-content-end col-md-6">
                  <img src={eachFeatureList.image} alt="" width={"65%"}/>
                </div>
              </Row>
            </Container>
          </section>
        )
      })
    }

    <CTAcomponent/>
    </>
  )
}
