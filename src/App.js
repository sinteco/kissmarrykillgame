import './App.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import ImageRender from './components/ImageRender';

function App() {
  //set title of the webpage
  React.useEffect(() => {
    document.title = " Kiss Marry Kill Game !"
 }, []);

  return (
    <div className="App">
    <Container>
      <div style={{ textAlign: "left" }}>
        <h1>Kiss Marry Kill Game</h1>
      </div>
      <Row>
        <Col sm={3}>
        </Col>
        <Col sm={6}>
          <ImageRender/>
        </Col>
        <Col sm={3}>
        </Col>
      </Row>
      <Row sm={8}>
        <h1>How to Play "Kiss Marry Kill"</h1>
        <p style={{ textAlign: "left" }}>The game is quite simple to play and requires nothing but your (semi-twisted) imagination.</p>
        <ul>
          <li style={{ textAlign: "left" }}>You are given three people, fictional or non.</li>
          <li style={{ textAlign: "left" }}>You must decide which one to kiss, to marry, and to kill. You can only choose each option once, so choose wisely!</li>
          <li style={{ textAlign: "left" }}>Then, you reveal your decisions and start over again!</li>
        </ul>
      </Row>
    </Container>
    </div>
  );
}

export default App;