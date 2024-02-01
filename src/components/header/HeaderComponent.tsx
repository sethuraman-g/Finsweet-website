import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

interface NavlinksType {
  title: string;
  href: string;
}

const navLinks: NavlinksType[] = [
  { title: "Home", href: "/" },
  { title: "Service", href: "/Service" },
  { title: "Company", href: "/Company" },
  { title: "Career", href: "/Career" },
  { title: "Blog", href: "/Blog" },
  { title: "Contact us", href: "/ContactUs" },
];

export const HeaderComponent = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="/" className="fs-4 fw-bold">
            &#123;Finsweet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-line" activeKey={location?.pathname}>
              {/* <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/Service" className="nav-link">
                Service
              </Nav.Link>
              <Nav.Link href="/Company" className="nav-link">
                Company
              </Nav.Link>
              <Nav.Link href="/Career" className="nav-link">
                Career
              </Nav.Link>
              <Nav.Link href="/Blog" className="nav-link">
                Blog
              </Nav.Link>
              <Nav.Link href="/ContactUs" className="nav-link">
                Contact us
              </Nav.Link> */}
              {navLinks.map((headerNav) => {
                return (
                  <Nav.Link
                    href={headerNav.href}
                    className="nav-link"
                    key={headerNav?.title}
                  >
                    {headerNav.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
