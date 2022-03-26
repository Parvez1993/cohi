import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import personality from "../images/personality.svg";
import location from "../images/location.png";
import event from "../images/event.svg";
import eventType from "../images/eventType.svg";
import "../styles/Questionaries.css";
function Questionaries() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="my-4">
          <div classNameName="d-flex justify-content-around">
            <Card style={{ width: "20rem", height: "36rem" }}>
              <Card.Img variant="top" src={personality} alt="img" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    What is your Personality Type?
                  </p>
                </Card.Title>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="introvert" defaultChecked />
                  <label className="mx-2 fs-4">Introvert</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="introvert" defaultChecked />
                  <label className="mx-2 fs-4">Extrovert</label>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} xs={12} className="my-4">
          <div classNameName="d-flex justify-content-around">
            <Card style={{ width: "20rem", height: "36rem" }}>
              <Card.Img variant="top" src={location} alt="img" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Which Town did you move to?
                  </p>
                </Card.Title>
                <Row>
                  <Col lg="6"></Col>
                </Row>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="town" defaultChecked />
                  <label className="mx-2 fs-4">Austin</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="town" defaultChecked />
                  <label className="mx-2 fs-4">San Francisco</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="town" defaultChecked />
                  <label className="mx-2 fs-4">Chicago</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="town" defaultChecked />
                  <label className="mx-2 fs-4">Toronto</label>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} xs={12} className="my-4">
          <div classNameName="d-flex justify-content-around">
            <Card style={{ width: "20rem", height: "36rem" }}>
              <Card.Img variant="top" src={event} alt="img" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Preferred Event Location
                  </p>
                </Card.Title>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="event" value="indoor" />
                  <label className="mx-2 fs-4">Indoor</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="event" value="outdoor" />
                  <label className="mx-2 fs-4">Outdoor</label>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} xs={12} className="my-4">
          <div classNameName="d-flex justify-content-around">
            <Card style={{ width: "20rem", height: "36rem" }}>
              <Card.Img variant="top" src={eventType} alt="img" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Preferred event type
                  </p>
                </Card.Title>
                <Row>
                  <Col lg="6"></Col>
                </Row>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="eventType" defaultChecked />
                  <label className="mx-2 fs-4">Dining</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="eventType" defaultChecked />
                  <label className="mx-2 fs-4">Fitness</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="eventType" defaultChecked />
                  <label className="mx-2 fs-4">Sports</label>
                </div>
                <div className="radio d-flex align-items-center">
                  <input type="radio" name="eventType" defaultChecked />
                  <label className="mx-2 fs-4">Grocery Shopping</label>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Questionaries;
