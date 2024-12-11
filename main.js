


const getRickAndMortyAliveCharacters = async function()
{
    // ---- Specifications --------
    const charatcersObj = await fetch("https://rickandmortyapi.com/api/character")
                                    .then((response) => response.json())
                                    .then((charsJSON) => charsJSON.results);  
    const aliveCharacters = charatcersObj.filter((char) => char.status === 'Alive');

    // Replaces all sequences of white spaces with a single underscore
    const regexAllSpaces = /\s+/gi;
    const modifiedNames = aliveCharacters.map((char) => {
        char.name = char.name.replace(regexAllSpaces, '_');
        return char
    });
    
    for(character of modifiedNames) console.log(character.name);
    

    // ---- Return format --------
    const returnObj = modifiedNames.map((char) => {
        return {id: char.id, name: char.name, status: char.status, gender: char.gender};
    })
    return await JSON.stringify(returnObj);
}

getRickAndMortyAliveCharacters().then(console.log)