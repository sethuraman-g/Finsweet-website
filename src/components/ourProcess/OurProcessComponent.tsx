import { Col, Container, Row } from "react-bootstrap";
import "./OurProcessComponent.scss";
import { databases, storage } from "../appwriteConfig";
import { useEffect, useState } from "react";


 const OurProcessComponent = () => {
  const bucketId = "images";
  const [processFlowData, setProcessFlowData] = useState<any>({
    documents: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const processFlowDatasResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "process-flow-data"
        );
        setProcessFlowData(processFlowDatasResponse);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Container className="py-5">
        <Row className="position-relative">
          <Col md={6}>
            <h5>OUR PROCESS</h5>
            <h2>The process we are working With Our client Worldwide</h2>
            <p className="text-muted">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </Col>
          <img
            src={`${storage.getFilePreview(bucketId, "InsideButtonIcon").href}`}
            alt="button"
            className="icon-rotation position-absolute end-0"
          />
        </Row>
        <Row>
          <Col className="process-flow">
            {processFlowData?.documents.map((data: any) => {
              return (
                <div
                  className="each-process-data d-flex gap-3 position-relative"
                  key={data?.title}
                >
                  <div>
                    <img
                      src={`../../src/assets/images/processImages/${data.icon}`}
                      alt="processIcons"
                    />
                    <span className="number position-absolute">
                      0{data.number}
                    </span>
                  </div>
                  <div>
                    <h6 className="fw-bold">{data.title}</h6>
                    <p className="text-muted">{data.description}</p>
                  </div>
                  <img
                    src={`../../src/assets/images/processImages/${data.image}`}
                    alt="processDatas"
                    className="img start-0"
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default OurProcessComponent;