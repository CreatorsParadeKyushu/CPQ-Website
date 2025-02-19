import { useState } from "react";
import styles from "./GenreFrame.module.css"

function GenreFrame({ genre }: {
  genre: "game" | "illust" | "music" | "video",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.frameOuter}
      style={{ flex: isHovered ? "7 1 0%" : "1 1 0%" }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.frame}
      >
        <div
          className={styles.view}
        >
        </div>
        <div className={styles.text}>
          {genre.toLocaleUpperCase()}
        </div>
      </div>
    </div>
  );
}

export { GenreFrame }
