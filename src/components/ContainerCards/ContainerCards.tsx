import Card from '../Card/Card';
import { ICardsProps } from '../../models/types';

function ContainerCards(props: ICardsProps) {
    return (
        <div className="card-grid-container">
            {props.characters.map((character) => {
                return <Card character={character} key={String(character.id)} />;
            })}
        </div>
    );
}

export default ContainerCards;
