import './App.css';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  React.useEffect(() => {
    document.title = " Kiss Marry Kill Game !"
 }, []);
 const MyCollection = [
      {
        label: "light",
        imgPath:"https://images.unsplash.com/photo-1611756468499-e9a38034e3c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      },
      {
        label: "The girl on the yellow couch",
        imgPath:"https://images.unsplash.com/photo-1651062847517-75434fc40264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80",
      },
      {
        label: "Curly hair",
        imgPath:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
      },
      {
        label: "Atena",
        imgPath:"https://images.unsplash.com/photo-1615805159563-afb93520d5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80",
      },
      {
        label: "Sara",
        imgPath:"https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
      },
      {
        label: "Editorial",
        imgPath:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        label: "premium",
        imgPath:"https://images.unsplash.com/photo-1613424969431-62a604d2cf67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      },
      {
        label: "Cristine",
        imgPath:"https://images.unsplash.com/photo-1523260349522-b9d156a677c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80",
      },
      {
        label: "Happy daughter",
        imgPath:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        label: "Portrait of a brunette woman smiling with nose ring.",
        imgPath:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=361&q=80",
      },
      {
        label: "Editorial, Fashion, People",
        imgPath:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        label: "Editorial",
        imgPath:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80",
      }
    ];
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array.slice(0, 3);
    }
    
  const [disabledkill, setkill] = React.useState(false);
  const [disabledkiss, setkiss] = React.useState(false);
  const [disabledmarry, setmarry] = React.useState(false);
  const CollectionSize = MyCollection.length;
  const [index, setActiveStep] = React.useState(0);
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPrivPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const selectPerson = () => {
    setkiss(true);
    alert("hi");
  };

  return (
    <div className="App">
    <Container>
      <div style={{ textAlign: "left" }}>
        <h1>Kiss Marry Kill Game</h1>
      </div>
      <Row>
        <Col sm={4}>
        </Col>
        <Col sm={5}>
        <Card border="dark" style={{ width: '29rem' }}>
          <Card.Body>
            <Image 
            src={shuffle(MyCollection)[index].imgPath}
            style={{
              height: 355,
              width: "100%",
              maxWidth: 450,
              display: "block",
              overflow: "hidden",
            }}
            alt={MyCollection[index].label}
            ></Image>
            <Card.Text>
              {MyCollection[index].label}
            </Card.Text>
            <Button
              size="small"
              onClick={goToPrivPicture}
              disabled={index === 0}
              style={{ float: "left" }}
            >
              Previous
            </Button>
            <ButtonGroup aria-label="Basic example">
                  <Button onClick={() => { selectPerson();}} disabled={disabledkiss} variant="success">Kiss</Button>
                  <Button onClick={() => {setmarry(true);selectPerson();}} disabled={disabledmarry} variant="warning">Marry</Button>
                  <Button onClick={() => {setkill(true);selectPerson();}} disabled={disabledkill} variant="danger">Kill</Button>
            </ButtonGroup>
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
              style={{ float: "right" }}
            >
              Next
            </Button>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={4}>
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