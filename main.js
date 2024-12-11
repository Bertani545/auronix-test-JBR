


const printRickAndMortyAliveCharacters = async function()
{

    const charatcersObj = await fetch("https://rickandmortyapi.com/api/character")
                                    .then((response) => response.json())
                                    .then((charsJSON) => charsJSON.results);  
    const aliveCharacters = charatcersObj.filter((char) => char.status === 'Alive');

    // Replaces all sequences of white spaces with a single underscore
    const regexAllSpaces = /\s+/gi;
    const modNames = aliveCharacters.map((char) => {
                                            char.name = char.name.replaceAll(regexAllSpaces, '_');
                                            return char
                                        });
    
    for(character of modNames) console.log(character.name);

}

printRickAndMortyAliveCharacters();