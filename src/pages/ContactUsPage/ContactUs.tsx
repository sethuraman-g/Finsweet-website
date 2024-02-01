import "./ContactUs.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ButtonComponent } from "../../components/button/ButtonComponent";
import { useRef } from "react";
import { ID } from "appwrite";
import { databases, storage } from "../../components/appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
interface FormData {
  nameInput?: string;
  emailInput?: string;
  subjectInput?: string;
  messageInput?: string;
}

export const ContactUs = () => {
  const bucketId = "images";

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData: FormData = {
        nameInput: nameRef?.current?.value,
        emailInput: emailRef?.current?.value,
        subjectInput: subjectRef?.current?.value,
        messageInput: messageRef?.current?.value,
      };
      const promise = databases.createDocument(
        "65a75267c181c26e7f15",
        "65a75272ae3fce3a9663",
        ID.unique(),
        {
          name: formData.nameInput,
          email: formData.emailInput,
          subject: formData.subjectInput,
          message: formData.messageInput,
        }
      );
      console.log("Document created:", promise);
      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log("Error creating document:", error);
    }
  };
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={`${storage.getFilePreview(bucketId, "OrangeBox").href}`}
                alt="orangeBox"
                width={15}
                className="mb-3"
              />
              <h6>CONTACT US</h6>
              <h2 className="fw-bold">Have a Question ?</h2>
              <h2 className="fw-bold">Let's Get in Touch with us 👋</h2>
              <p className="text text-muted">
                Fill up the Form and our team will get back to within 24 hrs
              </p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="input-control"
                  ref={nameRef}
                  required
                />
                <br />
                <br />

                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your E-mail"
                  className="input-control"
                  ref={emailRef}
                  required
                />
                <br />
                <br />

                <label htmlFor="subject">Subject</label>
                <br />
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your Concern"
                  className="input-control"
                  ref={subjectRef}
                  required
                />
                <br />
                <br />

                <label htmlFor="message">Message</label>
                <br />
                <input
                  type="text"
                  id="message"
                  placeholder="Type your Message"
                  className="input-control"
                  ref={messageRef}
                  required
                />
                <br />
                <br />

                <ButtonComponent text="Send Message" />
              </form>
            </Col>
            <Col md={4}>
              <div className="contact-header p-5 mt-4 position-relative">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "vertical-shape-line").href
                  }`}
                  alt="verticalLine"
                  className="position-absolute bottom-0 start-0"
                  height={"50%"}
                  width={"5%"}
                />
                <p>Location</p> <hr />
                <h6>DLF Cybercity, Bhubaneshwar,</h6>
                <h6>India,&52050</h6>
                <p>Working Hour</p> <hr />
                <h6>Monday To Friday</h6>
                <h6>9:00 AM to 8:00 PM</h6>
                <p>Our Support Team is available 24Hrs</p>
                <p>Contact Us</p> <hr />
                <h6>020 7993 2905</h6>
                <p>Hello@ether.com</p>
                <div className="d-flex gap-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "white" }}
                  />
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
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Image
            src={`${storage.getFilePreview(bucketId, "ContactMap").href}`}
            alt="contact-map"
            fluid
          />
        </Container>
      </section>
    </>
  );
};
