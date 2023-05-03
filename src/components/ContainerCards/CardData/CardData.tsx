import { useHttp } from '../../../hooks/use-http';
import { useMount } from '../../../hooks/use-mount';
import { ICharacter } from '../../../models/types';

const idRequest = (id: number | string) => {
    return `https://rickandmortyapi.com/api/character/${id}`;
};

interface CardDataProps {
    id: string | number | null;
}
const CardData: React.FC<CardDataProps> = ({ id }) => {
    const { data, request } = useHttp<ICharacter>();

    useMount(() => {
        request(idRequest(id as string));
    });
   
    return (
        <>
            <div className="card" data-testid="card">
                <img src={data?.image} alt="Card Image 1" />
                <h2>{data?.name}</h2>
                <h2>{data?.status}</h2>
                <p>{data?.species}</p>
                <p>{data?.gender}</p>
                <p>{data?.location.name}</p>
                <p>{data?.created}</p>
                <a href="https://rickandmortyapi.com/">Arhhh!</a>
            </div>
        </>
    );
};

export default CardData;
