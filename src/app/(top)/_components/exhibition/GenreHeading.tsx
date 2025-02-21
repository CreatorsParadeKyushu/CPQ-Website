import { CSSProperties } from 'react';
import genreHeadingStyles from './GenreHeading.module.css';
import { Genre } from '@/types/Genres';

function GenreHeading({ genre, isHoveredGenre, setIsHoveredGenre, style }: {
    genre: Genre,
    isHoveredGenre: Genre | null
    setIsHoveredGenre: (genre: Genre | null) => void,
    style?: CSSProperties | undefined
  }) {
    return (
        <div 
            className={genreHeadingStyles.container} 
            style={style}
            onMouseOver={() => setIsHoveredGenre(genre)}
            onMouseLeave={() => setIsHoveredGenre(null)}
        >
            <div className={`${genreHeadingStyles.diamond} ${isHoveredGenre == genre ? genreHeadingStyles.diamondView : ""}`} />
            <div className={genreHeadingStyles.text}>
                {genre.toUpperCase()}
            </div>
        </div>
    )
}

export {GenreHeading}
