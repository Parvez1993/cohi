import React, { useState } from "react";
import "../styles/Login.css";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
function Login() {
  const [isMember, setIsMember] = useState(true);
  //this is to trigger Forgot Password Modal
  const [smShow, setSmShow] = useState(false);

  //setFields

  console.log(isMember);
  return (
    <>
      <Container>
        <div className="my-2">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex py-md-5 py-sm-1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-10 mx-auto">
                      <form style={{ marginTop: "10%" }}>
                        <h2 className="login-heading my-4 text-white">
                          {isMember
                            ? "Welcome Back !"
                            : "Please fill the confirm"}
                        </h2>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            required
                          />
                          <label for="floatingPassword">Password</label>
                        </div>

                        {!isMember ? (
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="confirmPasswordPassword"
                              placeholder="Confirm Password"
                              required
                            />
                            <label for="confirmPasswordPassword">
                              Confirm Password
                            </label>
                          </div>
                        ) : (
                          ""
                        )}

                        {!isMember ? (
                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="age"
                              placeholder="Enter Age"
                              required
                            />
                            <label for="age">Enter Age</label>
                          </div>
                        ) : (
                          ""
                        )}

                        {!isMember ? (
                          <div className="form-floating mb-3 text-white">
                            <p>Choose Your Gender</p>
                            <div className="radio d-flex align-items-center">
                              <input
                                type="radio"
                                name="Male"
                                value="Male"
                                defaultChecked
                              />
                              <label className="mx-2 fs-5">Male</label>
                            </div>
                            <div className="radio d-flex align-items-center">
                              <input
                                type="radio"
                                name="Female"
                                value="Female "
                              />
                              <label className="mx-2 fs-5">Female</label>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {isMember ? (
                          <div
                            className="my-3 text-white"
                            onClick={() => setSmShow(true)}
                          >
                            Forgot password?
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="d-grid">
                          <button className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2">
                            Sign in
                          </button>

                          <div className="text-center mt-4" variant="warning">
                            <h5 className="fw-4 text-white">
                              {isMember
                                ? "Not a Member ?"
                                : "Already Have an Account?"}
                              <span
                                onClick={() => setIsMember(!isMember)}
                                style={{ cursor: "pointer", color: "purple" }}
                                className="mx-3 textEffect"
                              >
                                Click here
                              </span>
                            </h5>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////forget password Modal////////////////// */}

        <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              <h3>Enter your registered email address.</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <button className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2">
              Confirm
            </button>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Login;
