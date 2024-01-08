import "./CareerPage.scss";
import ButtonSvg from "../../assets/icons/button.svg";
import { Container, Row, Col, Image } from "react-bootstrap";
import CareerImage from "../../assets/images/Career-Image.png"
import { ReadMoreButtonComponent } from "../../components/button/ReadMoreButtonComponent";
import Covid from "../../assets/icons/covid.svg"
import Clock from "../../assets/icons/clock.svg"
import Home from "../../assets/icons/home.svg"
import Popper from "../../assets/icons/popper.svg"
import Stipend from "../../assets/icons/stipend.svg"
import Gym from "../../assets/icons/gym.svg"
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent";

interface CareerRolesType {
    title?: string;
    description?: string;
    salary?: string;
}

const careerRoles: CareerRolesType[] = [
    {
        title : "Full Stack Developer",
        description : "Bengaluru . Full Time",
        salary : "$10k - $18k . No equity"
    },
    {
        title : "Testing Engineer",
        description : "Bengaluru . Full Time",
        salary : "$08k - $10k . No equity"
    },
    {
        title : "Hr Manager",
        description : "Mumbai . Full Time",
        salary : "$08k - $10k . 4 to 5 Yrs Exp"
    },
    {
        title : "Product Designer",
        description : "Mumbai . Full Time",
        salary : "$08k - $10k . 4 to 5 Yrs Exp"
    },
    {
        title : "Wordpress Developer",
        description : "Mumbai . Full Time",
        salary : "$08k - $10k . 4 to 5 Yrs Exp"
    },
    {
        title : "Jr.QA Tester",
        description : "California, USA . Full Time",
        salary : "$14k - $23k . No equity"
    },
    {
        title : "Sr.UX Designer",
        description : "California, USA . Full Time",
        salary : "$14k - $23k . No equity"
    },
    {
        title : "Social Media Manager",
        description : "Kolkata, India . Fulltime",
        salary : "$5k - $6k . Fresher"
    },
    {
        title : "Golang Developer",
        description : "Mumbai. Fulltime",
        salary : "$08k - $10k . 4 to 5 Yrs Exp"
    }
]

interface WorkCulturesType {
    svg: string;
    title: string;
    description: string;
}

const workCultures: WorkCulturesType[] = [
    {
        svg : Covid,
        title : "Covid-19 insurance",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    },
    {
        svg : Clock,
        title : "Flexible working time",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    },
    {
        svg : Home,
        title : "Work from home",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    },
    {
        svg : Popper,
        title : "Annual retreats",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    },
    {
        svg : Stipend,
        title : "Learning Stipend",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    },
    {
        svg : Gym,
        title : "Gym membership",
        description : "Through True Rich Attended does no end it his mother since real had halfdoes no end it"
    }
]
export const CareerPage = () => {
  return (
    <>
        <section className="career-header py-5">
            <Container className="position-relative">
                <Row>
                    <Col>
                        <div className="career-section d-flex flex-column align-items-center">
                            <img src={ButtonSvg} alt="" style={{rotate:"90deg"}} className="position-absolute end-0"/>
                            <h5>CAREER AT FINSWEET</h5>
                            <h2 className="fw-bold">We hired people who are</h2>
                            <h2 className="fw-bold">Always Passionate about</h2>
                            <h2 className="fw-bold">what they do</h2>
                            <p className="text-muted">Through True Rich Attended does no end it his mother since real had half <br/>every him case in packages enquire we up ecstatic unsatiable saw .</p>
                            <Image src={CareerImage} alt="career" fluid/>
                            <h6 className="mt-5">See our open positions</h6>
                            <p>👇</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container  className="careers-section mb-5">
                <Row>
                    <Col md="12">
                        <div className="career-roles">
                            {
                                careerRoles.map((role) => {
                                    return(
                                        <div className="each-career-role">
                                            <h5>{role.title}</h5>
                                            <p className="text-muted">{role.description}</p>
                                            <p className="text-muted">{role.salary}</p>
                                            <ReadMoreButtonComponent text =  "Apply Now"/>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="our-culture py-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h6>OUR WORK & CULTURE</h6>
                        <h2 className="fw-bold">Come and join a team of highly skilled professionals.</h2>
                        <p className="text-muted">Through True Rich Attended does no end it his mother since real 
                            had half every him case in packages enquire we up ecstatic 
                            unsatiable saw his giving Remain expense you position concluded.
                        </p>
                    </Col>
                    <Col md={12} className="pt-4">
                        <div className="work-cultures">
                            {
                                workCultures.map((eachWork)=>{
                                    return(
                                        <div className="culture p-4">
                                            <img src={eachWork.svg} alt="" />
                                            <h6 className="fw-bold pt-2">{eachWork.title}</h6>
                                            <p className="culture-text text-muted">{eachWork.description}</p>
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
