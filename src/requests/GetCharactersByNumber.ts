const GetCharactersByNumber = async (ids: number[]) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`);

    return response.json();
};

export default GetCharactersByNumber;
