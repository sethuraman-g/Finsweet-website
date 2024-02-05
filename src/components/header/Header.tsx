import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import { useLocation } from "react-router-dom";

interface LinksType {
  title: string;
  link: string;
}
const links: LinksType[] = [
  { title: "Home", link: "/" },
  { title: "Service", link: "/service" },
  { title: "Company", link: "/company" },
  { title: "Career", link: "/career" },
  { title: "Blog", link: "/blog" },
  { title: "Contact-us", link: "/contact-us" },
];

const Header = () => {
  const location = useLocation();
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
              {links.map(({ title, link }) => {
                return (
                  <Nav.Link
                    href={link}
                    key={title}
                    className={`${
                      location.pathname === link ? "active" : ""
                    }nav-link`}
                  >
                    {title}
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

export default Header;
