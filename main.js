


const printRickAndMortyAliveCharacters = function()
{

    const charatcersObj = fetch("https://rickandmortyapi.com/api/character");
    charatcersObj.then((response) => response.json())
                .then((charsJSON) => charsJSON.results)
                .then((result) => console.log(result))
}

printRickAndMortyAliveCharacters();