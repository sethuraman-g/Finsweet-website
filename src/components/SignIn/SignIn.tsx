import { useRef } from "react";
import { useAuth } from "../utils/AuthContext";
import { Col, Container, Row } from "react-bootstrap";
import "./SignIn.scss";

export function Login() {
  const { user, loginUser, registerUser } = useAuth();

  const formRef = useRef(null);

  const handleLogin = (e: any) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    const userInfo = { email, password };
    registerUser(userInfo);
  };

  return (
    <section className="p-5 sign-in-form">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="signInForm">
              <h2 className="mb-4">Login or register</h2>
              <form ref={formRef}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="signInInput p-1"
                />{" "}
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="signInInput p-1"
                />{" "}
                <br /> <br />
                <div className="d-flex gap-3">
                  <button
                    className="button"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
