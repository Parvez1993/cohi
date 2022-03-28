import React from "react";
import { Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Appbar() {
  return (
    <>
      <Navbar className="app">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            <h2>Cahi</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <p className="m-2 text-white">Md Parvez</p>
            <div className="d-flex align-items-center bg-warning rounded">
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
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Appbar;
