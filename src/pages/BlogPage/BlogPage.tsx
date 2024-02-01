import "./BlogPage.scss";
import { Col, Container, Row } from "react-bootstrap";
import  ReadMoreButtonComponent  from "../../components/button/ReadMoreButtonComponent";
import  CTAcomponent  from "../../components/ctaSection/CTAcomponent";
import Card from "react-bootstrap/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { databases, storage } from "../../components/appwriteConfig";
import { useEffect, useState } from "react";

 const BlogPage = () => {
  const bucketId = "images";
  const [blogMembers, setBlogMembers] = useState<any>({ documents: [] });
  const [recentPosts, setRecentPosts] = useState<any>({ documents: [] });
  const [blogPosts, setBlogPosts] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchBlogPostsData = async () => {
      try {
        const blogMembersResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "BlogMembersData"
        );
        setBlogMembers(blogMembersResponse);

        const recentPostsResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "RecentPostsData"
        );
        setRecentPosts(recentPostsResponse);

        const blogPostsResponse = await databases.listDocuments(
          "65a75267c181c26e7f15",
          "BlogPostsData"
        );
        setBlogPosts(blogPostsResponse);
      } catch (error) {
        console.log("Error in fetching the blog posts data", error);
      }
    };
    fetchBlogPostsData();
  }, []);

  const navigate = useNavigate();
  const openBlogInnerPage = () => {
    navigate("/blog/inner-blog");
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="d-flex gap-5">
            <Col md={6}>
              <img
                src={`${storage.getFilePreview(bucketId, "OrangeBox").href}`}
                alt="orangeBox"
                width={15}
              />
              <h6 className="mt-2">TRENDING</h6>
              <h1 className="fw-bold">
                Breaking the code How did we build our Figma plugin
              </h1>
              <p className="text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the.
              </p>
              <ReadMoreButtonComponent
                text="Read More"
                handleClick={openBlogInnerPage}
              />
              <div className="d-flex align-items-center gap-2 my-4">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "AndrewJonson").href
                  }`}
                  alt="Andrew Johnson"
                />
                <h6>
                  Andrew Jonson
                  <span className="text-muted">
                    | Posted on 27th January 2021
                  </span>
                </h6>
              </div>
              <div className="position-relative">
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "company-vision").href
                  }`}
                  alt="companyVision"
                  width={"100%"}
                />
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "vertical-shape-line").href
                  }`}
                  alt="VerticalLine"
                  className="V-Line position-absolute"
                />
              </div>
            </Col>

            <Col md={4} className="blog-members p-5 position-relative">
              <div>
                <img
                  src={`${
                    storage.getFilePreview(bucketId, "RotatedIcon").href
                  }`}
                  alt="buttonSvg"
                  width={40}
                  className="position-absolute top-0 end-0"
                />
                {blogMembers?.documents.map((member: any) => {
                  return (
                    <div className="each-blog" key={member.memberName}>
                      <div>
                        <h5 className="fw-bold">{member.title}</h5>
                      </div>
                      <div className="d-flex gap-2">
                        <img
                          src={`../../src/assets/images/BlogImages/${member.blogMember}`}
                          alt="blogMember"
                          width={"15%"}
                        />
                        <div>
                          <h6>{member.memberName}</h6>
                          <span className="text-muted">{member.date}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <h2>Read Recent Post</h2>
            </Col>
            <Col md={12}>
              <div className="recent-posts">
                {recentPosts?.documents.map((recentPost: any) => {
                  return (
                    <div className="all-posts d-flex" key={recentPost?.post}>
                      <div className="d-flex">
                        <img
                          src={`../../src/assets/images/BlogImages/${recentPost.post}`}
                          alt="posts"
                          width={"40%"}
                          className="post-image"
                        />
                        <div className="each-posts px-4 py-3">
                          <h5 className="fw-bold">{recentPost.description}</h5>
                          <div className="d-flex gap-2">
                            <img
                              src={`../../src/assets/images/BlogImages/${recentPost.svg}`}
                              alt="svgPost"
                              height={50}
                            />
                            <div className="post-stats d-flex flex-column justify-content-center align-text-center pt-2">
                              <h6>{recentPost.svgName}</h6>
                              <p className="text-muted">
                                {recentPost.postDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="all-posts py-5">
        <Container>
          <Row>
            <Col>
              <h2>All Posts</h2>
              <div className="posts">
                {blogPosts?.documents.map((post: any) => {
                  return (
                    <div key={post?.image}>
                      <Card className="border-0">
                        <Card.Img
                          variant="top"
                          src={`../../src/assets/images/BlogImages/${post.image}`}
                        />
                        <Card.Body>
                          <Card.Title>{post.postTitle}</Card.Title>
                          <Card.Text className="text-muted">
                            {post.description}
                          </Card.Text>
                          <div className="d-flex gap-2 align-items-center">
                            <img
                              src={`../../src/assets/images/BlogImages/${post.person}`}
                              alt="blogPerson"
                              width={40}
                            />
                            <div>
                              <span>{post.personName}</span>
                              <p className="text-muted">{post.postDate}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <CTAcomponent />
    </>
  );
};
export default BlogPage;