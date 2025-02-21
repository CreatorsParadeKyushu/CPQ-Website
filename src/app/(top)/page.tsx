'use client'

import Image from "next/image";
import styles from "./page.module.css";
import topStyles from "./top.module.css";
import aboutStyles from "./about.module.css";

import { Zen_Maru_Gothic } from "next/font/google";
import { useEffect, useState } from "react";
import FloatIn from "../components/ScrollReveal/FloatIn";
import { Panel } from "./_components/Panel";
import { RightBar } from "./_components/RightBar";
import { Genres } from "./_components/exhibition/Genres";
import { GenreHeading } from "./_components/exhibition/GenreHeading";
import { Genre, GenresArray } from "@/types/Genres";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "300",
  subsets: ["latin"]
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Exhibition Genre
  const [isHoveredGenre, setIsHoverGenre] = useState<Genre | null>(null);

  const toggleVisibility = () => {
    if (window.scrollY >= window.innerHeight * 3 / 4)
      setIsVisible(true)
    else
      setIsVisible(false);
  };

  useEffect(() => {
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (<>
    <div>
      <div className={styles.leftBar}>
        <div className={styles.leftBarText}>
          | CREATORS PARADE KYUSHU |
        </div>
      </div>
      <RightBar isVisible={isVisible} />
      <div id="top" className={topStyles.backPanel}>
        <div className={topStyles.container}>
          <div className={topStyles.imageContainer}>
            <Image
              alt="cpq"
              src="/cpq_prepare.png"
              width={200}
              height={200}
              style={{ outline: "", outlineStyle: "solid", outlineColor: "black" }}
              className={topStyles.image}
            />
          </div>
          <div className={topStyles.title}>
            <div className={`${topStyles.titleText} ${zenMaruGothic.className}`}>CREATORS</div>
            <div className={`${topStyles.titleText} ${zenMaruGothic.className}`}>PARADE</div>
            <div className={`${topStyles.titleText} ${zenMaruGothic.className}`}>KYUSHU</div>
          </div>
        </div>
      </div>
      <Panel
        id="about"
        heading="ABOUT"
        detail="クリエイターズパレード九州について"
        color="cyan"
      >
        <div style={{ padding: "3vh 3vw" }}>
          <FloatIn move="bottom">
            <div className={aboutStyles.subheading} style={{ marginTop: 0 }}>
              クリエイターズパレード九州とは
            </div>

          </FloatIn>
          <FloatIn move="bottom">
            <div className={aboutStyles.content} style={{ marginLeft: "6vw" }}>
              「クリエイターズパレード九州」は学生の創作物を学生団体(部活動、サークル等)ごとにブースを設け、各団体が設定したコンセプトに合わせてブースを装飾し作品を展示する企画です。
            </div>
          </FloatIn>
          <FloatIn move="bottom">
            <div className={aboutStyles.subheading} style={{ marginLeft: "12vw" }}>
              クリエイターズパレード九州の目的
            </div>
          </FloatIn>
          <FloatIn move="bottom">
            <div className={aboutStyles.content} style={{ marginLeft: "18vw" }}>
              学生の創作作品を一般の方々に向け公開する機会を得る。
              <br />
              企画を通して学校を跨いだ学生団体間の交流を活性化する。
            </div>
          </FloatIn>
        </div>
      </Panel>
      <Panel
        id="exhibition"
        heading="EXHIBITION GENRE"
        detail="展示ジャンル"
        color="lime"
      >
        <div style={{ display: "flex" }}>
          <Genres 
            isHoveredGenre={isHoveredGenre}
            setIsHoveredGenre={setIsHoverGenre}
          />
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: 10 }}>
            {GenresArray.map(genre => (
              <GenreHeading 
                key={genre}
                genre={genre} 
                isHoveredGenre={isHoveredGenre}
                setIsHoveredGenre={setIsHoverGenre}
              />
            ))}
            {/* <GenreHeading genre="game" />
            <GenreHeading genre="illust" />
            <GenreHeading genre="music" />
            <GenreHeading genre="video" /> */}
          </div>
        </div>
      </Panel>
      <Panel
        id="date_place"
        heading="DATE"
        detail="開催日"
        color="red"
      >
      </Panel>
      <Panel
        id="members"
        heading="MEMBERS"
        detail="参加団体"
        color="yellow"
      >
      </Panel>
      <Panel
        id="sponsor"
        heading="SPONSOR"
        detail="スポンサー"
        color="blue"
      >
      </Panel>
      <Panel
        id="join"
        heading="JOIN"
        detail="参加方法"
        color="orange"
      >
      </Panel>
      <Panel
        id="contact"
        heading="CONTACT"
        detail="コンタクト"
        color="aquamarine"
      >
      </Panel>
    </div>
  </>);
}
