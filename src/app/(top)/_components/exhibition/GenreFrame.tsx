import Image from "next/image";
import styles from "./GenreFrame.module.css"
import { Genre } from "@/types/Genres";

function GenreFrame({ genre, imgSrc, isHoveredGenre, setIsHoveredGenre }: {
  genre: Genre,
  imgSrc: string,
  isHoveredGenre: Genre | null
  setIsHoveredGenre: (genre: Genre | null) => void
}) {
  return (
    <div
      className={styles.frameOuter}
      style={{ flex: isHoveredGenre == genre ? "7 1 0%" : "1 1 0%" }}
      onMouseOver={() => setIsHoveredGenre(genre)}
      onMouseLeave={() => setIsHoveredGenre(null)}
    >
      <div className={styles.frame}
      >
        <div
          className={styles.view}
        >
          <div className={styles.genreImageContainer}>
          <Image 
            alt={`${genre}-image`}
            src={imgSrc}
            fill
            className={styles.genreImage}
            />
        </div>
        </div>
        <div className={styles.text}>
          {genre.toLocaleUpperCase()}
        </div>
      </div>
    </div>
  );
}

export { GenreFrame }
