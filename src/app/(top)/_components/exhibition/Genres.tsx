import { GenreFrame } from "./GenreFrame";
import styles from "./Genres.module.css"

function Genres() {
    return (<div className={styles.container}>
        <GenreFrame genre="game"/>
        <GenreFrame genre="illust"/>
        <GenreFrame genre="music"/>
        <GenreFrame genre="video"/>
    </div>);
}

export {Genres}
