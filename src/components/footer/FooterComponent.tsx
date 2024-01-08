import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SVG from "../../assets/icons/button.svg";
import ShapeImage from '../../assets/images/horizontal-shape.png';
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import "./FooterComponent.scss"


export const FooterComponent = () => {
  return (
    <>
      <Container className='mt-5 position-relative'>
        <Row>
          <Col xs ="6" sm="6" md="3">
            <div>
              <img src={SVG} alt='button.svg' className='pb-3'/>
              <h2>Let's make something special</h2>
              <h5>Let's talk!🤙</h5>
              <p>020 7993 2905</p>
              <p>hi@finsweet.com</p>
              <hr/>
              <span>DLF Cybercity,Bhubaneshwar,<br/>
              India, &52050</span>
            </div>
          </Col>
          <Col xs ="6" sm="6" md="3">
            <div className="footer-column pt-5">
              <Link to="/" className='footer-link'>Home</Link>
              <Link to="/ServicePage" className='footer-link'>Service</Link>
              <Link to="/CompanyPage" className='footer-link'>Company</Link>
              <Link to="/CareerPage" className='footer-link'>Career</Link>
              <Link to="/BlogPage" className='footer-link'>News</Link>
            </div>
          </Col>
          <Col xs ="6" sm="6" md="3">
            <div className='pt-5'>
              <Link to="/ServicePage" className='footer-link'>Service</Link>
              <Link to="/" className='service-link'>Technical Support</Link>
              <Link to="/" className='service-link'>Testing</Link>
              <Link to="/" className='service-link'>Development</Link>
              <Link to="/" className='service-link'>AWS/Azure</Link>
              <Link to="/" className='service-link'>Consulting</Link>
              <Link to="/" className='service-link'>Information Technology</Link>
            </div>
          </Col>
          <Col xs ="6" sm="6" md="3">
            <div className='pt-5'>
              <Link to="/" className='footer-link'>Resources</Link>
              <Link to="/" className='resources-link'>About us</Link>
              <Link to="/" className='resources-link'>Testimonial</Link>
              <Link to="/PrivacyPolicy" className='resources-link'>Privacy Policy</Link>
              <Link to="/PrivacyPolicy" className='resources-link'>Terms of use</Link>
              <Link to="/BlogPage" className='resources-link'>Blog</Link>
            </div>
          </Col>
        </Row>
        <button className='footer-button position-absolute end-0 bottom-0'><img src={ShapeImage} alt="Shape-In-Button"/> Contact Us &#8594;</button>
      </Container>

      <section className='footer'>
        <Container>
          <Row>
            <Col xs="12" sm="8" md="6" className='d-flex'>
              <h3>&#123;Finsweet</h3>
              <h5 className="footer-copyright pt-1">&#169; 2021 Finsweet</h5>
            </Col>
            <Col xs="8" sm="4" md="6" className='footer-icons d-flex gap-3 justify-content-end'>
              <button className='social-media-icon'><img src={Facebook} alt="facebook.svg" /></button>
              <button className='social-media-icon'><img src={Twitter} alt="twitter.svg" /></button>
              <button className='social-media-icon'><img src={Instagram} alt="instagram.svg" /></button>
              <button className='social-media-icon'><img src={Linkedin} alt="linkedin.svg" /></button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
