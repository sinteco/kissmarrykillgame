import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ImageRender(){
    //person image url collaction
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
      //suffle the image collaction so that it shows radom 3 images
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    //states to use for game
    const [disabledkill, setkill] = useState(false);
    const [disabledkiss, setkiss] = useState(false);
    const [disabledmarry, setmarry] = useState(false);
    const initialValue = "000";
    const [selectedPersons, setselectedPersons] = useState(initialValue);
    const CollectionSize = 3;
    const [index, setActiveStep] = useState(0);
    const [show, setShow] = useState(false);
    const [images, setimages] = useState(shuffle(MyCollection));

    //close modal
    const handleClose = () => setShow(false);
    //show modal
    const handleShow = () => setShow(true);
    //set next person(image)
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    //set previuse person(image)
    const goToPrivPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    //array sum
    function total(arr) {
        if(!Array.isArray(arr)) return;
        let sum=0;
        arr.forEach(each => {
          sum= +sum + +each;
        });
        return sum;
      };
    //select person(image): disable if its not selected index and choice from 3
    const selectPerson = (index,choice) => {
      if(selectedPersons[index]==='0'){
        let newselectedPersons = [...selectedPersons];
        newselectedPersons[index] = '1';
        setselectedPersons(newselectedPersons);
      if(choice==="kiss"){
        setkiss(true);
      }else if(choice==="kill"){
        setkill(true);
      }else if(choice==="marry"){
        setmarry(true);
      }
      }
      //finish the game
      if(total(selectedPersons)==2){
        //show modal
        handleShow();
      }
    }
    //restart the game
    function resetgame(){
        setselectedPersons(initialValue);
        setkiss(false);
        setkill(false);
        setmarry(false);
        setActiveStep(0);
    }
    //if a player wishes to play next game
    function playnext(){
        resetgame();
        setimages(shuffle(MyCollection));
    }
      return(
      <Card border="dark" style={{ width: '29rem' }}>
          <Button variant="light" onClick={()=>resetgame()} size="small" style={{ float: "right", width:'12rem' }}>Reset</Button>
      <Card.Body>
        <Image 
          src={images[index].imgPath}
          style={{
            height: 355,
            width: "100%",
            maxWidth: 450,
            display: "block",
            overflow: "hidden",
          }}
        alt={images[index].label}
        ></Image>
        <Card.Text>
          {images[index].label}
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
              <Button onClick={() => {selectPerson(index,'kiss');}} disabled={disabledkiss} variant="success">Kiss</Button>
              <Button onClick={() => {selectPerson(index,'marry');}} disabled={disabledmarry} variant="warning">Marry</Button>
              <Button onClick={() => {selectPerson(index,'kill');}} disabled={disabledkill} variant="danger">Kill</Button>
        </ButtonGroup>
        <Button
          size="small"
          onClick={goToNextPicture}
          disabled={index === CollectionSize - 1}
          style={{ float: "right" }}
        >
          Next
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game over</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, congratulations you have chose the best one!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();playnext()}}>
            Play Next
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    );
}
export default ImageRender;