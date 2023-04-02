import './ContainerCards.css';
interface CardProps {
    image: string;
    title: string;
    text: string;
}

function ContainerCards() {
    const cardInfo: CardProps[] = [
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/112.jpeg',
            title: 'Card Title 1',
            text: 'Some quick on the card title and make up content.',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/508.jpeg',
            title: 'Card Title 2',
            text: 'Some quick on the card title and make up content.',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/789.jpeg',
            title: 'Card Title 3',
            text: 'Some quick example title and make up content',
        },
    ];

    const renderCard = (card: CardProps, index: number) => {
        return (
            <div className="card" key={index}>
                <img src={card.image} alt="Card Image 1" />
                <h2>{card.title}</h2>
                <p> {card.text}</p>
                <a href="#">Go somewhere</a>
            </div>
        );
    };

    return <div className="card-grid-container">{cardInfo.map(renderCard)}</div>;
}

export default ContainerCards;
