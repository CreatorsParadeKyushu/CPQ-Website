import { CSSProperties } from 'react';
import genreHeadingStyles from './GenreHeading.module.css';
import { Genre, GenreToJp } from '@/types/Genres';
import { IBM_Plex_Sans_JP, Mona_Sans } from 'next/font/google';

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "100"
});

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
            <div className={genreHeadingStyles.headingContainer}>
                <div className={`${genreHeadingStyles.text} ${monaSans.className}`}>
                    {genre.toUpperCase()}
                </div>
                <div className={`${genreHeadingStyles.textJp} ${ibmPlexSansJp.className}`}>
                    {GenreToJp(genre)}
                </div>
            </div>
        </div>
    )
}

export {GenreHeading}
