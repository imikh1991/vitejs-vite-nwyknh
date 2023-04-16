import Card from '../Card/Card';
import { ICharacter } from '../../models/types';
import './ContainerCards.css';

interface ContainerCardsProps {
    data: ICharacter[] | undefined;
    open: () => void;
    loading: boolean;
}
/* 
info: Info[];
    results: ICharacter[];
*/
const ContainerCards: React.FC<ContainerCardsProps> = ({ data }) => {
    console.log('Results:', data);
    return (
        <div className="card-grid-container" data-testid="card-container">
            {Array.isArray(data) &&
                data?.map((character) => {
                    return <Card character={character} key={String(character.id)} />;
                })}
        </div>
    );
};

export default ContainerCards;
