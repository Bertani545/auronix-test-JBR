


const printRickAndMortyAliveCharacters = async function()
{

    const charatcersObj = await fetch("https://rickandmortyapi.com/api/character")
                                    .then((response) => response.json())
                                    .then((charsJSON) => charsJSON.results);
    const aliveChars = charatcersObj.filter((char) => char.status === 'Alive');


}

printRickAndMortyAliveCharacters();