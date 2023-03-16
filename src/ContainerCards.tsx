// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import bootstrap from 'bootstrap';
//import React, {createElement as e} from React;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContainerCards.css';
// import { createElement as e } from 'react';

function ContainerCards() {
  const cardInfo = [
    {image: "https://rickandmortyapi.com/api/character/avatar/112.jpeg", title: "Card Title 1", text: "Some quick on the card title and make up content."},
    {image: "https://rickandmortyapi.com/api/character/avatar/508.jpeg", title: "Card Title 2", text: "Some quick example text to build title and make up content"},
    {image: "https://rickandmortyapi.com/api/character/avatar/789.jpeg", title: "Card Title 3", text: "Some quick example title and make up content"}
  ];

  const renderCard = (card, index) => {
    // one card 
    return (
      <Card style={{ width: '19rem', margin: '10px'}} key={index}>
        <Card.Img variant="top" src={card.image}/> 
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
          <Card.Text>
          {card.text}
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
  }
  // BootStrap naming 
    // Render to the page  
    // в объекте row у тебя должен быть 
    // цикл forEach, который создаст объекты card
    cardInfo.forEach(element => console.log(element)); 
    return (
      <Container>
        <Row> 
          <Col>{cardInfo.map(renderCard)}</Col>
          <Col>{cardInfo.map(renderCard)}</Col>
          <Col>{cardInfo.map(renderCard)}</Col>
        </Row>
      </Container>
       
    ); 
}

export default ContainerCards;
