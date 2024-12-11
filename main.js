


const printRickAndMortyAliveCharacters = async function()
{

    const charatcersObj = await fetch("https://rickandmortyapi.com/api/character")
                                    .then((response) => response.json())
                                    .then((charsJSON) => charsJSON.results);
    const aliveChars = charatcersObj.filter((char) => char.status === 'Alive');

    // Replaces all white spaces with a single _
    const regexAllSpaces = /\s+/gi;
    const modNames = aliveChars.map((char) => {char.name = char.name.replaceAll(regexAllSpaces, '_'); return char})

}

printRickAndMortyAliveCharacters();