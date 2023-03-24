import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/ContainerCards.css';

function ContainerCards() {
    const cardInfo = [
        {image: "https://rickandmortyapi.com/api/character/avatar/112.jpeg", title: "Card Title 1", text: "Some quick on the card title and make up content."},
        {image: "https://rickandmortyapi.com/api/character/avatar/508.jpeg", title: "Card Title 2", text: "Some quick example text to build title and make up content"},
        {image: "https://rickandmortyapi.com/api/character/avatar/789.jpeg", title: "Card Title 3", text: "Some quick example title and make up content"}
    ];

    const renderCard = (card: any, index: any) => {
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
