import React from "react";
import { Card, Col, Container, Row, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useStore } from "../Contextapi";
import "../styles/Results.css";

function Results() {
  const { results } = useStore();

  console.log(results);
  return (
    <>
      {results ? (
        <Container>
          <Row className="my-5 justify-content-center">
            {results.map((item, keys) => {
              const { img, name } = item;
              return (
                <>
                  <Col
                    sm={6}
                    key={keys}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Card className="card_style" style={{ width: "400px" }}>
                      <Card.Img
                        variant="top"
                        src={img}
                        alt="img"
                        className="result_img"
                      />
                      <Card.Body className="mt-3">
                        <Card.Title>
                          {" "}
                          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                            {name}
                          </p>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>

          <Row>
            <Col>
              <Link to="/survey">
                <button className="glow-on-hover my-5" type="button">
                  Try Again
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Container className="result_container">
            <Row>
              <Col className="my-5">
                <Alert variant="danger">
                  <h4 className="p-3">
                    No Matches Found with your preferences. Try Again 😢!!!
                  </h4>
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/survey">
                  <button className="glow-on-hover my-5" type="button">
                    Try Again
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default Results;
