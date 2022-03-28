import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import personality from "../images/personality.svg";
import location from "../images/location.png";
import event from "../images/event.svg";
import eventType from "../images/eventType.svg";
import "../styles/Questionaries.css";
import { useStore } from "../Contextapi.js";
import { useNavigate } from "react-router-dom";

function Questionaries() {
  const { setPersonality, setType, setCategory, setLocation, handleMatch } =
    useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleMatch();
    setPersonality("Introvert");
    setType("Indoor");
    setCategory("Dining");
    setLocation("Austin");
    navigate("/results");
  };
  return (
    <Container>
      <Row className="my-5">
        <Col sm={12} md={6} lg={3} className="my-4">
          <Card
            style={{ height: "100%" }}
            className="card_style custom_card_img"
          >
            <Card.Img variant="top" src={personality} alt="img" />
            <Card.Body>
              <Card.Title>
                {" "}
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  What is your Personality Type?
                </p>
              </Card.Title>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="introvert"
                  value="Introvert"
                  defaultChecked
                  onChange={(e) => setPersonality(e.target.value)}
                />
                <label className="mx-2">Introvert</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="introvert"
                  value="Extrovert "
                  onChange={(e) => setPersonality(e.target.value)}
                />
                <label className="mx-2 ">Extrovert</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3} className="my-4">
          <Card
            style={{ height: "100%" }}
            className="card_style custom_card_img"
          >
            <Card.Img variant="top" src={location} alt="img" />
            <Card.Body>
              <Card.Title>
                {" "}
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Which Town did you move to?
                </p>
              </Card.Title>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="town"
                  defaultChecked
                  value="Austin"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label className="mx-2 ">Austin</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="town"
                  value="San Francisco"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label className="mx-2 ">San Francisco</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="town"
                  value="Chicago"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label className="mx-2 ">Chicago</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="town"
                  value="Toronto"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <label className="mx-2 ">Toronto</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3} className="my-4">
          <Card
            style={{ height: "100%" }}
            className="card_style custom_card_img"
          >
            <Card.Img variant="top" src={event} alt="img" />
            <Card.Body>
              <Card.Title>
                {" "}
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Preferred Event Location
                </p>
              </Card.Title>
              <div className="radio d-flex align-items-center  mt-5">
                <input
                  type="radio"
                  name="event"
                  value="Indoor"
                  onChange={(e) => setType(e.target.value)}
                  defaultChecked
                />
                <label className="mx-2 ">Indoor</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="event"
                  value="Outdoors"
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="mx-2 ">Outdoor</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3} className="my-4">
          <Card
            style={{ height: "100%" }}
            className="card_style custom_card_img"
          >
            <Card.Img variant="top" src={eventType} alt="img" />
            <Card.Body>
              <Card.Title>
                {" "}
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Preferred event type
                </p>
              </Card.Title>

              <div className="radio d-flex align-items-center  mt-5">
                <input
                  type="radio"
                  name="eventType"
                  defaultChecked
                  value="Dining"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="mx-2 ">Dining</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="eventType"
                  value="Fitness"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="mx-2 ">Fitness</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="eventType"
                  value="Sports"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="mx-2 ">Sports</label>
              </div>
              <div className="radio d-flex align-items-center">
                <input
                  type="radio"
                  name="eventType"
                  value="Grocery Shopping"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label className="mx-2 ">Grocery Shopping</label>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <button
            className="glow-on-hover my-4"
            type="button"
            onClick={handleSubmit}
          >
            FIND MY MATCHES
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Questionaries;
