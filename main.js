


const getRickAndMortyAliveCharacters = async function()
{
    try{
        // ---- Specifications --------
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const charatcersJSON = await response.json();
        const charatcersObj = charatcersJSON.results;

        const aliveCharacters = charatcersObj.filter((char) => char.status === 'Alive');

        // Replaces all sequences of white spaces with a single underscore
        const regexAllSpaces = /\s+/g;
        const modifiedNames = aliveCharacters.map((char) => {
            const modChar = {...char};
            modChar.name = modChar.name.replace(regexAllSpaces, '_');
            return modChar;
        });

        for(let character of modifiedNames) console.log(character.name);
        

        // ---- Return format --------
        const returnObj = modifiedNames.map((char) => {
            return {id: char.id, name: char.name, status: char.status, gender: char.gender};
        })

        return JSON.stringify({results: returnObj}, null, 2);
    }
    catch(error)
    {
        console.error("Unable to complete call: ", error);
        return JSON.stringify({results: "Error"});
    }
}

getRickAndMortyAliveCharacters().then(console.log)