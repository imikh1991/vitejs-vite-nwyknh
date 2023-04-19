import Card from '../Card/Card';
import { ICharacter } from '../../models/types';
import './ContainerCards.css';
import ProgressBar from '../ProgressBar/ProgressBar';

interface ContainerCardsProps {
    data: ICharacter[] | undefined;
    open: () => void;
    loading: boolean;
}

const ContainerCards: React.FC<ContainerCardsProps> = ({ data, open, loading }) => {
    return (
        <div className="card-grid-container" data-testid="card-container">
            {loading && <ProgressBar />}
            {Array.isArray(data) &&
                data?.map((character) => {
                    return <Card character={character} key={String(character.id)} open={open} />;
                })}
        </div>
    );
};

export default ContainerCards;
