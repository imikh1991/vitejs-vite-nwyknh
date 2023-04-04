import Card from '../Card/Card';
import { ICardsProps, ICharacter } from '../../models/types';

function ContainerCards(props: ICardsProps) {
    const characters = Array.isArray(props.characters) ? props.characters : [];

    return (
        <div className="card-grid-container">
            {characters.map((character: ICharacter) => {
                return <Card character={character} key={String(character.id)} />;
            })}
        </div>
    );
}

export default ContainerCards;
