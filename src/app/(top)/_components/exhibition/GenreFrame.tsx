import { useState } from "react";
import styles from "./GenreFrame.module.css"
import Image from "next/image";
import { Genre } from "@/types/Genres";

function GenreFrame({ genre, isHoveredGenre, setIsHoveredGenre }: {
  genre: Genre,
  isHoveredGenre: Genre | null
  setIsHoveredGenre: Function
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
          {/* <Image 
            alt={`${genre}-image`}
            src="/cpq_prepare.png" 
            width={100}
            height={100}
            className={styles.genreImage}
            /> */}
        </div>
        <div className={styles.text}>
          {genre.toLocaleUpperCase()}
        </div>
      </div>
    </div>
  );
}

export { GenreFrame }
