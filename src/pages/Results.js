import React from "react";
import { db } from "../utility/firebase";

import {
  Card,
  Col,
  Container,
  Row,
  Alert,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Contextapi";
import "../styles/Results.css";

function Results() {
  const { results, setResults, user } = useStore();
  // const { reload, setReload } = useState(true);
  const [match, setMatch] = React.useState([]);
  const mathResult = (e, j) => {
    let arr = [];
    db.collection("User")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().id !== e) {
            if (
              j.length === 1 &&
              j[0].name !== "Sorry! No Matches Found. Try Again"
            ) {
              if (j[0].name === doc.data().result[0].name) {
                arr.push(doc.data());
              }
            }
            if (j.length === 2) {
              if (
                j[0].name === doc.data().result[0].name &&
                j[1].name === doc.data().result[1].name
              ) {
                arr.push(doc.data());
              }
            }
          }
        });

        setMatch(arr);
      });
  };
  const funcUpdate = () => {
    db.collection("User")
      .doc(user.id)
      .update({
        result: results,
      })
      .then(() => {
        db.collection("User")
          .doc(user.id)
          .get()
          .then((querySnapshot) => {
            mathResult(user.id, querySnapshot.data().result);
          });
      });
  };

  React.useEffect(() => {
    funcUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (reload) {
  //     window.location.reload(true);
  //     setReload(false);
  //   }
  // }, [setReload]);

  //trigger the overlay
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  console.log("match", match);

  return (
    <>
      {results ? (
        <Container>
          <Row className="my-5 justify-content-center">
            {results.map((item, id) => {
              const { img, name } = item;
              return (
                <Col
                  md={6}
                  sm={12}
                  key={id}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Card className="card_style mb-4" style={{ width: "400px" }}>
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
              );
            })}
          </Row>
          <Row>
            <Col>
              <div>
                {match.length > 0 ? (
                  <p>Buddies with Similar Interests</p>
                ) : (
                  <p>No Buddies Found with Similar Interests</p>
                )}
                {match
                  ? match.map((item, k) => {
                      return (
                        <>
                          <OverlayTrigger
                            trigger={["hover", "hover"]}
                            placement="top"
                            key={k}
                            overlay={
                              <Popover id={`popover-positioned-right`}>
                                <Popover.Body>
                                  <h6>name: {item.name}</h6>
                                  <p>email: {item.email}</p>
                                  <p>age: {item.age}</p>
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <h5 className="text-black text-left">
                              {item.name}
                            </h5>
                          </OverlayTrigger>
                        </>
                      );
                    })
                  : "No Buddies Found"}
              </div>
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
                  <button
                    onClick={setResults("")}
                    className="glow-on-hover my-5"
                    type="button"
                  >
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
