import { use } from "react";
import styles from "./page.module.css";

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
    if (!characterData) return <div>No data.</div>;

    return (
        <div className={styles.character}>
            <img className={styles.image} alt={characterData[0].name} src={characterData[0].img} />
            <div className={styles.about}>
                <h2 className={styles.name}>{characterData[0].name}</h2>
                <div className={styles.details}>
                    <div>
                        <span>Nickname:</span> {characterData[0].nickname}
                    </div>
                    <div>
                        <span>Portrayed by:</span> {characterData[0].portrayed}
                    </div>
                    <div>
                        <span>Status:</span> {characterData[0].status}
                    </div>
                </div>
                <div className={styles.quote}>"Quote soon"</div>
            </div>
        </div>
    );
};

export default Character;
