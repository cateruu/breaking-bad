import { use } from "react";

const getCharacterData = async (name: string) => {
    try {
        const res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await res.json();
        if (!data.length) throw new Error("No character data.");
        return data;
    } catch (error) {
        console.log((error as Error).message);
        // better error handling in future here
    }
};

type Params = {
    params: { name: string };
};

const Character = ({ params }: Params) => {
    const characterData = use(getCharacterData(params.name));
    if (!characterData) return <h1>No data</h1>;
    return <h1>{characterData[0].name}</h1>;
};

export default Character;
