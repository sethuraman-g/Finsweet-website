import "./PrivacyPolicy.scss";
import { Col, Container, Row } from "react-bootstrap";
import { storage } from "../../components/appwriteConfig";

export const PrivacyPolicy = () => {
  return (
    <>
      <section className="py-5">
        <Container className="position-relative">
          <Row>
            <Col md={6}>
              <img
                src={`${storage.getFilePreview("images", "OrangeBox").href}`}
                alt="orange box"
                width={15}
              />
              <h2 className="mt-2">Privacy Policy</h2>
              <p className="text-muted">Last Updated on 27th January 2021</p>
              <img
                src={`${storage.getFilePreview("images", "halfShape").href}`}
                alt="halt shape"
                width={40}
                className="position-absolute end-0 top-0"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="privacy-policy">
          <img
            src={`${storage.getFilePreview("images", "horizontal-line").href}`}
            height={15}
            width={"20%"}
            className="position-absolute start-0 bottom-0"
          />
          <h1 className="fw-bold">
            Transform Your Idea Into Reality with Ether Leading Digital Agency
          </h1>
          <p className="text-muted">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies,we at Zeta Design wanted to build a Figma
            plugin for the larger design community. The plugin is called the
            Ghost UXWriter and has a set of UX copies cataloged and categorized
            with a voice and tone variation ranging from plain, casual to
            playful. The intention to build this Figma plugin originated from
            our Medium blog post, ‘Designing voice and tone for error messages.
          </p>
          <p className="text-muted">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
          <p className="text-muted">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
          <p className="text-muted">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice.
          </p>

          <h3 className="fw-bold">
            We disclose your information in the following manner:
          </h3>
          <p className="text-muted">
            Business partners, suppliers and sub-contractors (“Affiliates”):
            Affiliates may use this information to help provide, understand, and
            improve our services and Affiliate’s own services for the
            performance of any contract we enter into
          </p>
          <p className="text-muted">
            Financial Institutions and Auditors: In order to complete third
            party financial, technical and legal audits of our operations to
            help us operate our business, we may need to share your information
            with financial institutions and auditors.
          </p>
          <p className="text-muted">
            Advertisers and Advertising Networks: To provide you with select and
            serv e relevant advertisements to you and others, we may share your
            data with advertiser sand advertising networks. We do not disclose
            your Personal Information or Sensitive Personal Information to our
            advertisers, but we may provide them with aggregate information
            about our users (for example, we may inform them that any given
            number of participants in a specified age group who clicked on their
            advertisement on any given day). We may also use such aggregate
            information to help advertisers reach the kind of audience they want
            to target.
          </p>
        </Container>
      </section>
    </>
  );
};
