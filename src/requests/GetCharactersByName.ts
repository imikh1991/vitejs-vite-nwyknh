const GetCharactersByName = async (name: string) => {
    let response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
    if (!name) {
        response = await fetch(`https://rickandmortyapi.com/api/character`);
    }
    return response.json();
};

export default GetCharactersByName;
