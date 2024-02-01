import { Row, Col, Container } from "react-bootstrap";
import { useRef } from "react";
import { ID } from "appwrite";
import { databases } from "../appwriteConfig";
import { useDispatch, useSelector } from "react-redux";
import { updateEmailData } from "../../globalReduxStore/Store";
import { storage } from "../appwriteConfig";
import { ToastContainer, toast } from "react-toastify";
import "./CTAcomponent.scss";
import "react-toastify/dist/ReactToastify.css";

interface EmailReduxData {
  emailData: {
    email?: string;
  };
}

export const CTAcomponent = () => {
  const bucketId = "images";

  const emailDispatch = useDispatch();
  const { email } = useSelector((state: EmailReduxData) => state.emailData);

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    await e.preventDefault();
    try {
      const emailFormData = emailRef?.current?.value;

      emailDispatch(
        updateEmailData({
          email: emailFormData,
        })
      );

      const emailStoredInDB = await databases.createDocument(
        "65a75267c181c26e7f15",
        "65b094e7a03cadba9fda",
        ID.unique(),
        {
          email: emailFormData,
        }
      );
      console.log("Email :", emailStoredInDB);
      emailRef.current.value = "";
      toast.success("Your E-mail is sent successfully !");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Container>
      <section className="cta-section position-relative mt-5">
        <img
          src={`${storage.getFilePreview(bucketId, "InsideButtonIcon")}`}
          alt="button"
          className="svg position-absolute top-0 start-0"
        />
        <Row className="align-items-center p-5">
          <Col md={6} className="p-2">
            <h4 className="text-white">NEWSLETTER</h4>
            <h2 className="text-white fs-1">
              Subscribe Our News Letter to get latest updates.
            </h2>
          </Col>
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Paresh@Pixeto.com"
                className="input"
                ref={emailRef}
                required
              />
              <ToastContainer />
            </form>
          </Col>
        </Row>
        <img
          src={`${
            storage.getFilePreview(bucketId, "vertical-shape-line").href
          }`}
          alt="vertical-shape-line"
          className="vertical-shape-line position-absolute top-0 end-0"
        />
      </section>
    </Container>
  );
};
