const GetCharactersByNumber = async (ids: number[]) => {
    let response;
    if (ids.length > 0) {
        response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(', ')}`);
    } else {
        // если фильтр поиска пустой вернем всех
        fetch('https://rickandmortyapi.com/api/character');
        console.log('Please provide an array of character IDs');
        console.log(response);
    }

    return response.json();
};

export default GetCharactersByNumber;
