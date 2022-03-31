import React, { useState } from "react";
import "../styles/Login.css";
import { Alert, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useStore } from "../Contextapi";
import { db, auth } from "../utility/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

function Login() {
  const { user, setUser, msg, setMsg } = useStore();
  const [isMember, setIsMember] = useState(true);
  //this is to trigger Forgot Password Modal
  const [smShow, setSmShow] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  let [recoverpass, setRecoverpass] = useState("");

  //setFields

  if (user) {
    navigate("/survey");
  }

  const forgetPassowrt = (e) => {
    e.preventDefault();
    setSmShow(false);
    firebase
      .auth()
      .sendPasswordResetEmail(recoverpass)
      .then(() => {
        setMsg("Please Check your email");
      })
      .catch((error) => {
        setMsg(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMember) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          db.collection("User")
            .doc(result.user.uid)
            .get()
            .then((querySnapshot) => {
              setUser(querySnapshot.data());
            });
        })
        .catch((error) => {
          setMsg(error.message);
        });
    } else {
      if (password !== confirmPassword) {
        setMsg("Password and Confirm Password do not match");
      }
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          db.collection("User")
            .doc(result.user.uid)
            .set({
              id: result.user.uid,
              name: name,
              email: email,
              gender: gender,
              age: age,
              result: [
                {
                  img: "https://cdn.pixabay.com/photo/2020/04/22/18/22/excuse-me-5079442_960_720.jpg",
                  name: "Sorry! No Matches Found. Try Again",
                },
              ],
            });

          setUser({
            uid: result.user.uid,
            name,
            email,
          });

          setMsg("Login Successfull Please Wait !!!");
        })
        .catch((error) => {
          if (error.message.includes("The email address is already")) {
            setMsg("The email address is already");
          } else if (error.message.includes("Password")) {
            setMsg("Password should be least 6 characters long");
          } else {
            setMsg(error.message);
          }
        });
    }
  };

  return (
    <>
      {!user ? (
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
                          {msg ? <Alert variant="secondary">{msg}</Alert> : ""}
                          {!isMember ? (
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="floatingInput"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label htmlFor="floatingInput">Name</label>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="floatingInput"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                          </div>

                          {!isMember ? (
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="confirmPasswordPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                              <label htmlFor="confirmPasswordPassword">
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
                                name="age"
                                placeholder="Enter Age"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                              />
                              <label htmlFor="age">Enter Age</label>
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
                                  name="gender"
                                  value="Male"
                                  defaultChecked
                                  onChange={(e) => setGender(e.target.value)}
                                />
                                <label className="mx-2 fs-5">Male</label>
                              </div>
                              <div className="radio d-flex align-items-center">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="Female"
                                  onChange={(e) => setGender(e.target.value)}
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
                            <button
                              className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                              onClick={handleSubmit}
                            >
                              {isMember ? "Sign In" : "Register"}
                            </button>

                            {/* //with google */}

                            {/* {!isMember ? (
                              <div
                                className="d-flex align-items-center gap-3 p-2 bg-white text-uppercase fw-bold rounded"
                                style={{ cursor: "pointer" }}
                              >
                                <div>
                                  {" "}
                                  <img
                                    width="20px"
                                    className="mx-2"
                                    alt="Google sign-in"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                  />
                                </div>
                                Login with Google
                              </div>
                            ) : (
                              ""
                            )} */}

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
                <h5>
                  Enter your registered email address and check your mail.
                </h5>
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
                  onChange={(e) => setRecoverpass(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <button
                onClick={forgetPassowrt}
                className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
              >
                Confirm
              </button>
            </Modal.Body>
          </Modal>
        </Container>
      ) : (
        <Navigate to="/survey" />
      )}
    </>
  );
}

export default Login;
