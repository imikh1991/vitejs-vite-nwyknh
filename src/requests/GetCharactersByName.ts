const GetCharactersByName = async (name: string) => {
    // прервать через 1 секунду - эта байда не работает и запросы сыпятся
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 1000);

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`, {   
            signal: controller.signal,
        });
        if (response) {
            controller.abort();
            // если его не прервать он сыпет тысячу запросов без остановки
            // он должен набрать героев и показать их в карточках
            fetch('https://rickandmortyapi.com/api/character');
        }
        return response.json();
    } catch (err: unknown) {
        if (err.name == 'AbortError') {
            // обработать ошибку от вызова abort()
            alert('Прервано!');
        } else {
            throw err;
        }
    }
};

export default GetCharactersByName;
