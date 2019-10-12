import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/general.css";

import "./App.css";
import Header from "./layouts/Header";
import Body from "./layouts/Body";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Jumbotron,
  Button
} from "react-bootstrap";

import squarePlaceholder from "./assets/images/square-placeholder.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="py-4">
        <Row className="no-gutters">
          <Col>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body className="p-0 text-left d-md-flex">
                <Card.Img
                  className="d-none d-lg-block"
                  style={{ width: "25%" }}
                  src={squarePlaceholder}
                />
                <div className="p-4">
                  <Card.Text className="text-primary font-weight-light">
                    Category
                  </Card.Text>
                  <Card.Title className="mb-0">Card Title</Card.Title>
                  <Card.Text>12 nov</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </Card.Text>
                  <Card.Text className="text-primary">Read more...</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <Card.Body className="p-0 text-left d-md-flex">
                <Card.Img
                  className="d-none d-lg-block"
                  style={{ width: "25%" }}
                  src={squarePlaceholder}
                />
                <div className="p-4">
                  <Card.Text className="text-primary font-weight-light">
                    Category
                  </Card.Text>
                  <Card.Title className="mb-0">Card Title</Card.Title>
                  <Card.Text>12 nov</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </Card.Text>
                  <Card.Text className="text-primary">Read more...</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="p-0 text-left d-md-flex">
                <Card.Img
                  className="d-none d-lg-block"
                  style={{ width: "25%" }}
                  src={squarePlaceholder}
                />
                <div className="p-4">
                  <Card.Text className="text-primary font-weight-light">
                    Category
                  </Card.Text>
                  <Card.Title className="mb-0">Card Title</Card.Title>
                  <Card.Text>12 nov</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </Card.Text>
                  <Card.Text className="text-primary">Read more...</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="p-0 text-left d-md-flex">
                <Card.Img
                  className="d-none d-lg-block"
                  style={{ width: "25%" }}
                  src={squarePlaceholder}
                />
                <div className="p-4">
                  <Card.Text className="text-primary font-weight-light">
                    Category
                  </Card.Text>
                  <Card.Title className="mb-0">Card Title</Card.Title>
                  <Card.Text>12 nov</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content...
                  </Card.Text>
                  <Card.Text className="text-primary">Read more...</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactssadssad
        </a>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
