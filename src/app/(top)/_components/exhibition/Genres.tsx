import { Genre, GenresArray } from "@/types/Genres";
import { GenreFrame } from "./GenreFrame";
import styles from "./Genres.module.css"

function Genres({isHoveredGenre, setIsHoveredGenre}: {
    isHoveredGenre: Genre | null,
    setIsHoveredGenre: (genre: Genre | null) => void
}) {
    return (<div className={styles.container}>
        {GenresArray.map(genre => (
            <GenreFrame 
                key={genre}
                genre={genre}
                isHoveredGenre={isHoveredGenre}
                setIsHoveredGenre={setIsHoveredGenre}
            />
        ))}
    </div>);
}

export {Genres}
