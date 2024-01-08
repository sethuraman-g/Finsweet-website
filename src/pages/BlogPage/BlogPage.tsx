import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import { Col, Container, Row } from "react-bootstrap";
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";
import Card from 'react-bootstrap/Card';
import "./BlogPage.scss";
import OrangeBox from "../../assets/icons/orangebox.svg"
import Vision from "../../assets/images/company-vision.png"
import VerticalLine from "../../assets/images/vertical-shape-line.png"
import Andrew from "../../assets/icons/AndrewJonson.svg"
import Post1 from "../../assets/images/post-1.png"
import Post2 from "../../assets/images/post-2.png"
import Post3 from "../../assets/images/post-3.png"
import Post4 from "../../assets/images/post-4.png"
import Post5 from "../../assets/images/post-5.png"
import Post6 from "../../assets/images/post-6.png"
import RecentPost1 from "../../assets/images/RecentPost1.png"
import RecentPost2 from "../../assets/images/RecentPost2.png"
import RecentPost3 from "../../assets/images/RecentPost3.png"
import RecentPost4 from "../../assets/images/RecentPost4.png"
import Mathew from "../../assets/images/MathewJasele.png"
import Hussen from "../../assets/images/HussenAbakas.png"
import ButtonSvg from "../../assets/icons/button.svg"

interface BlogMembersType {
    title?: string;
    blogMember?: string;
    memberName?: string;
    date?: string;
}
const blogMembers: BlogMembersType[] = [
    {
        title : "Great design expectations prejudice in digital products in Next Year",
        blogMember : Andrew,
        memberName : "Andrew Jonson",
        date : "Jan 19, 2021"

    },
    {
        title : "Great design expectations prejudice in digital products in Next Year",
        blogMember : Mathew,
        memberName : "Mathew Jasele",
        date : "Jan 19, 2021"

    },
    {
        title : "Great design expectations prejudice in digital products in Next Year",
        blogMember : Hussen,
        memberName : "Hussen Abakas",
        date : "Jan 19, 2021"

    }
]
interface BlogPostsType {
    image?: string;
    postTitle?: string;
    description?: string;
    person?: string;
    personName?: string;
    postDate?: string;
}

const blogPosts: BlogPostsType[] = [
    {
        image : Post1,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        image : Post2,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        image : Post3,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        image : Post4,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        image : Post5,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        image : Post6,
        postTitle : "We aim to attain the greatest satisfaction for our clients ",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page.",
        person : Andrew,
        personName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    }
]

interface recentPostType {
    post?: string;
    postDesc?: string;
    svg?: string;
    svgName?: string;
    postDate?: string;
}
const recentPosts: recentPostType[] = [
    {
        post : RecentPost1,
        postDesc : "Today’s best design trends for digital products",
        svg : Andrew,
        svgName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        post : RecentPost2,
        postDesc : "Today’s best design trends for digital products",
        svg : Andrew,
        svgName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        post : RecentPost3,
        postDesc : "Today’s best design trends for digital products",
        svg : Andrew,
        svgName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    },
    {
        post : RecentPost4,
        postDesc : "Today’s best design trends for digital products",
        svg : Andrew,
        svgName : "Andrew Jonson",
        postDate : "Jan 19,2021"
    }
]

export const BlogPage = () => {
  return (
    <>
    <section className="py-5">
        <Container>
            <Row className="d-flex gap-5">
                <Col md="6">
                    <img src={OrangeBox} alt="" width={"15px"}/>
                    <h6 className="mt-2">TRENDING</h6>
                    <h1 className="fw-bold">Breaking the code How did we build our Figma plugin</h1>
                    <p className="text-muted">It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The Maker is a decentralized. We aim to attain the.
                    </p>
                    <ReadMoreButtonComponent text="Read More"/>

                    <div className="d-flex align-items-center gap-2 my-4">
                        <img src={Andrew} alt="" />
                        <h6>Andrew Jonson <span className="text-muted">| Posted on 27th January 2021</span></h6>
                    </div>
                    <div className="position-relative">
                    <img src={Vision} alt="" width={"100%"}/>
                    <img src={VerticalLine} alt="" className="V-Line position-absolute"/>
                    </div>
                </Col>

                <Col md="4" className="blog-members p-5 position-relative">
                    <div className="">
                        <img src={ButtonSvg} alt="" className="position-absolute top-0 end-0" style={{rotate:"90deg"}}/>
                    {
                        blogMembers.map((member)=>{
                            return(
                                <div className="each-blog">
                                    <div>
                                        <h5 className="fw-bold">{member.title}</h5>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img src={member.blogMember} alt="" />
                                        <div>
                                            <h6>{member.memberName}</h6>
                                            <span className="text-muted">{member.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                   
                </Col>
            </Row>
        </Container>
    </section>

    <section>
        <Container className="py-5">
            <Row>
                <Col md="6">
                    <h2>Read Recent Post</h2>
                </Col>
                <Col md="12">
                    <div className="recent-posts">
                        {
                            recentPosts.map((eachpost)=>{
                                return(
                                    <div className="all-posts d-flex" key={eachpost?.post}>
                                        <div>
                                            <img src={eachpost.post} alt="" width={"100%"} className="post-image"/>
                                        </div>
                                        <div className="each-posts px-4 py-3">
                                            <h5 className="fw-bold">{eachpost.postDesc}</h5>
                                            <div className="d-flex gap-2">
                                                <img src={eachpost.svg} alt="" width={"20%"} height={"20%"}/>
                                                <div className="d-flex flex-column justify-content-center pt-2">
                                                    <h6>{eachpost.svgName}</h6>
                                                    <p className="text-muted">{eachpost.postDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
                    {
                        blogPosts.map(post => {
                            return(
                                <div>
                                    <Card>
                                    <Card.Img variant="top" src={post.image} />
                                    <Card.Body>
                                        <Card.Title>{post.postTitle}</Card.Title>
                                        <Card.Text className="text-muted">{post.description}</Card.Text>
                                        <div className="d-flex gap-2 align-items-center">
                                            <img src={post.person} alt=""/>
                                            <div>
                                                <span>{post.personName}</span>
                                                <p className="text-muted">{post.postDate}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
              
                </Col>
            </Row>
        </Container>
    </section>

    <CTAcomponent/>
    </>
  )
}
