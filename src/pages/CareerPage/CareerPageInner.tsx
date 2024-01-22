import { Col, Container, Row } from "react-bootstrap";
import "./CareerPage.scss";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import SvgButton from "../../assets/icons/rotateIcon.svg";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import { useCallback, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useRef } from "react";
import { ID } from "appwrite";
import { databases } from "../../components/appwriteConfig";

interface CareerFormData {
  firstNameInput: string;
  lastNameInput: string;
  emailInput: string;
  mobileNumberInput: number;
  textAreaField: string;
}
// interface TypeOfInitialObjectValues {
//   showDetails: boolean;
//   showRequirements: boolean;
//   showResponsibilities: boolean;
// }

enum Tabsenum {
  ShowDetails = "showDetails",
  ShowRequirements = "showRequirements",
  ShowResponsibilities = "showResponsibilities",
}

// const initial: TypeOfInitialObjectValues = {
//   showDetails: true,
//   showRequirements: false,
//   showResponsibilities: false,
// };

export const CareerPageInner = () => {
  // const location = useLocation();
  const { title } = useParams();

  const [selectedTab, setSelectedTab] = useState(Tabsenum.ShowDetails);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleSubmit = async (e: any) => {
    await e.preventDefault();
    try {
      const formData: CareerFormData = {
        firstNameInput: firstNameRef.current.value,
        lastNameInput: lastNameRef.current.value,
        emailInput: emailRef.current.value,
        mobileNumberInput: mobileNumberRef.current.value,
        textAreaField: textAreaRef.current.value,
      };
      const promise = await databases.createDocument(
        "65a75267c181c26e7f15",
        "65a8a9f438f1feda7945",
        ID.unique(),
        {
          firstName: formData.firstNameInput,
          lastName: formData.lastNameInput,
          email: formData.emailInput,
          mobileNo: formData.mobileNumberInput,
          textArea: formData.textAreaField,
        }
      );
      console.log("Document created:", promise);
      // firstNameRef.current.value = "";
      // lastNameRef.current.value = "";
      // emailRef.current.value = "";
      // mobileNumberRef.current.value = "";
      // textAreaRef.current.value = "";
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  const getTabs = useCallback(() => {
    if (selectedTab === Tabsenum.ShowDetails) {
      return (
        <div className="details">
          <ul>
            <li>
              Create and edit video content for multi-platform use and
              distribution for social media channels (Facebook, Youtube,
              Instagram, Snapchat, IGTV, Facebook Stories and Instagram
              Stories).
            </li>
            <li>
              Design & Create highly engaging industry-related content in both
              photo, gif & video format
            </li>
            <li>Publish Posts on various social media channels</li>
            <li>
              Promote content on social networks and monitor engagement (e.g.
              comments and shares)
            </li>
            <li>Research industry-related topics</li>
            <li>Editing audio and sound design on projects</li>
            <li>
              Engage in opportunities to develop original content and concepts
              for web and mobile
            </li>
            <li>
              Create motion graphics and animations using 2D and 3D applications
              for marketing and promotional usage.
            </li>
            <li>
              Manage the day-to-day handling of all social media channels such
              as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
              YouTube, adapting content to suit different channels
            </li>
          </ul>
        </div>
      );
    } else if (selectedTab === Tabsenum.ShowRequirements) {
      return (
        <div className="requirements">
          <ul>
            <li>You should require the laptop or PC to work on a project</li>
            <li>
              Mostly the project requirements is based on the front end
              technologies
            </li>
            <li>
              The Project you are working is purely based on HTML, CSS,
              Javascript
            </li>
            <li>
              Some times you will work on React or Angular based on the
              requirements
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="responsibilites">
          <ul>
            <li>Should be able to work in Front End projects</li>
            <li>Always ready to work based on requirements of the project</li>
            <li>Most Projects should be based on the client requirements</li>
            <li>
              Clients must be always satisfied with your works and efforts
            </li>
            <li>You might be able to work in night shifts also</li>
          </ul>
        </div>
      );
    }
  }, [selectedTab]);

  return (
    <>
      <section>
        <Container>
          <Row className="p-5 d-flex gap-5">
            <Col md={5} className="pt-5">
              <h6>CAREER AT ETHER</h6>
              <h2 className="fw-bold">{title}</h2>
              <p className="text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages.
              </p>
              <ButtonComponent text="Apply Now" />
            </Col>

            <Col className="job-description p-5 position-relative" md={5}>
              <img
                src={SvgButton}
                alt="svgButton"
                className="position-absolute top-0 end-0"
              />
              <h5 className="fw-bold">Job Description</h5>
              <p>Remote, India, 4 to 5 Years of Experience</p>
              <p>Department : Product Engineering</p>
              <p>Full Time 5 Position Available.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="career-details">
          <Row>
            <Col>
              <header className="d-flex justify-content-center p-3">
                <NavLink
                  to=""
                  className="career-links"
                  onClick={() => setSelectedTab(Tabsenum.ShowDetails)}
                >
                  Details
                </NavLink>
                <NavLink
                  to=""
                  className="career-links"
                  onClick={() => setSelectedTab(Tabsenum.ShowRequirements)}
                >
                  Requirements
                </NavLink>
                <NavLink
                  to=""
                  className="career-links"
                  onClick={() => setSelectedTab(Tabsenum.ShowResponsibilities)}
                >
                  Responsibilities
                </NavLink>
              </header>
              <div className="job-roles">{getTabs()}</div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="apply-now mt-5">
        <Container>
          <h4>Apply Now</h4>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs sm md={6}>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                  ref={firstNameRef}
                />
              </Col>
              <Col xs sm md={6}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  ref={lastNameRef}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs sm md={6}>
                <input
                  type="email"
                  placeholder="Email Id"
                  className="input"
                  ref={emailRef}
                />
              </Col>
              <Col xs sm md={6}>
                <input
                  type="number"
                  placeholder="Mobile No"
                  className="input"
                  ref={mobileNumberRef}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <textarea
                  name="textarea"
                  id="textArea"
                  rows={5}
                  placeholder="Why do you thing you are good fit for Ether?"
                  ref={textAreaRef}
                ></textarea>
              </Col>
            </Row>
            <div className="d-flex gap-2 col-md-7 my-3">
              <input type="checkbox" className="checkbox" required />
              <span className="text-muted">
                I agree to accept the privacy policy, We will add your contact
                details provided in this form to our system for contacting you
                regarding your request.
              </span>
            </div>

            <ButtonComponent text="Submit Application" />
          </form>
        </Container>
      </section>

      <CTAcomponent />
    </>
  );
};
