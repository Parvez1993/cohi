import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useStore } from "../Contextapi";
import { auth } from "../utility/firebase";

function Appbar() {
  const navigate = useNavigate();
  const { setUser, user } = useStore();
  console.log(user);
  const logoutUser = async () => {
    setUser("");
    await auth.signOut();
    navigate("/");

    // set user will be null
  };
  return (
    <>
      <Navbar className="app">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            <h2>Cohi</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <p className="m-2 text-white">{user?.name}</p>
            {user ? (
              <div
                className="d-flex align-items-center bg-warning rounded"
                onClick={logoutUser}
              >
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/shutdown--v1.png"
                    width="30px"
                    alt="icon"
                    style={{ marginLeft: "15px" }}
                  />
                </div>
                <Button variant="warning">Logout</Button>
              </div>
            ) : (
              ""
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Appbar;
