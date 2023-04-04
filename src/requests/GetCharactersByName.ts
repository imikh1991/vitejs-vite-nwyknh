const GetCharactersByName = async (name: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);

    return response.json();
};

export default GetCharactersByName;
