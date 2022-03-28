import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Appbar() {
  return (
    <>
      <Navbar className="app">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            <h2>Cahi</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Appbar;
