import { Col, Container, Row } from "react-bootstrap";
import { databases, storage } from "../appwriteConfig";
import "./ExpertiseComponent.scss";
import { useEffect, useState } from "react";

interface ExpertiseListType {
  icon: string;
  title: string;
  description: string;
}
 const ExpertiseComponent = () => {
  const bucketId = "images";

  const [expertiseList, setExpertiseListData] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expertiseDataResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "expertise-section-data"
        );
        setExpertiseListData(expertiseDataResponse);
      } catch (error) {
        console.log("error in fetching the data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="our-expertise-section">
        <Container>
          <Row className="d-flex">
            <Col md={6}>
              <h4>OUR EXPERTISE</h4>
              <h2 className="expertise-title fw-bold">
                We want to get local identification in every corner of the world
                in this era of global citizenship
              </h2>
              <p className="expertise-paragraph text-muted">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </Col>
            <Col md={6}>
              <div className="expertise-container position-relative">
                <img
                  src={`${storage.getFilePreview(bucketId, "BlueBox")}`}
                  alt="empty-box"
                  className="box position-relative"
                />
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "horizontal-line").href
                  }`}
                  alt="horizontal-line-shape"
                  className="horizontal-line position-absolute start-0 bottom-0"
                />
                {expertiseList?.documents.map((item: ExpertiseListType) => {
                  return (
                    <div
                      className="expertise-skills d-flex mb-2"
                      key={item?.title}
                    >
                      <div>
                        <img
                          src={`../../src/assets/images/expertiseImages/${item.icon}`}
                          alt="expertise-items"
                          className="expertise-image"
                        />
                      </div>
                      <div className="expertise-text">
                        <h6 className="fw-bold">{item.title}</h6>
                        <p className="text-muted">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ExpertiseComponent;