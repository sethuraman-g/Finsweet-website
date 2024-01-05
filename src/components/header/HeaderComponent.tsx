import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.scss";

export const HeaderComponent = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className='header'>
      <Container>
        <Navbar.Brand href="/" className='fs-4 fw-bold'>&#123;Finsweet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="nav-line">
          <Nav.Link href='/' className="nav-link">Home</Nav.Link>
          <Nav.Link href="/ServicePage" className="nav-link">Service</Nav.Link>
          <Nav.Link href="/CompanyPage" className="nav-link">Company</Nav.Link>
          <Nav.Link href="/CareerPage" className="nav-link">Career</Nav.Link>
          <Nav.Link href="/BlogPage" className="nav-link">Blog</Nav.Link>
          <Nav.Link href="/ContactUsPage" className="nav-link">Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
