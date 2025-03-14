'use client'

import Image from "next/image";
import styles from "./page.module.css";
import topStyles from "./top.module.css";
import aboutStyles from "./about.module.css";
import datePlaceStyles from "./dateplace.module.css"
import membersStyles from "./members.module.css";

import { Zen_Maru_Gothic, IBM_Plex_Sans_JP, Mona_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import FloatIn from "../components/ScrollReveal/FloatIn";
import { Panel } from "./_components/Panel";
import { RightBar } from "./_components/RightBar";
import { Genres } from "./_components/exhibition/Genres";
import { GenreHeading } from "./_components/exhibition/GenreHeading";
import { Genre, GenresArray } from "@/types/Genres";
import Link from "next/link";
import { Group, GroupPanel } from "./_components/member/GroupPanel";
import { getWindowSize } from "@/utils/useWindowSize";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "300",
  subsets: ["latin"]
});

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "300"
});
const ibmPlexSansJpSemiBold = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "400"
});

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const windowSize = getWindowSize();

  // Exhibition Genre
  const [isHoveredGenre, setIsHoverGenre] = useState<Genre | null>(null);

  const toggleVisibility = () => {
    if (window.scrollY >= window.innerHeight * 3 / 4)
      setIsVisible(true)
    else
      setIsVisible(false);
  };

  useEffect(() => {
    const fetchGroups = async () => {
      const res = await fetch("/data/members.json");
      const data = await res.json();

      setGroups(data.members);
    };
    fetchGroups();
    
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (<>
    <div>
      <div className={styles.leftBar}>
        <div className={`${styles.leftBarText} ${ibmPlexSansJp.className}`}>
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
            <div className={`${aboutStyles.subheading} ${ibmPlexSansJpSemiBold.className}`} 
                  style={{ marginTop: 0 }}>
              クリエイターズパレード九州とは
            </div>

          </FloatIn>
          <FloatIn move="bottom">
            <div className={`${aboutStyles.content} ${ibmPlexSansJp.className}`} 
                  style={{ marginLeft: "6vw" }}>
              「クリエイターズパレード九州」は学生の創作物を学生団体(部活動、サークル等)ごとにブースを設け、各団体が設定したコンセプトに合わせてブースを装飾し作品を展示する企画です。
            </div>
          </FloatIn>
          <FloatIn move="bottom">
            <div className={`${aboutStyles.subheading} ${ibmPlexSansJpSemiBold.className}`} 
                  style={{ marginLeft: "12vw" }}>
              クリエイターズパレード九州の目的
            </div>
          </FloatIn>
          <FloatIn move="bottom">
            <div className={`${aboutStyles.content} ${ibmPlexSansJp.className}`} 
                              style={{ marginLeft: "18vw", color: "linear-gradient(red, blue)" }}>
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
          </div>
        </div>
      </Panel>
      <Panel
        id="date_place"
        heading="DATE"
        detail="開催日"
        color="red"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={datePlaceStyles.dateContainer}>
            <div className={`${datePlaceStyles.date} ${monaSans.className}`}>
              2025.8.30 SAT 
              <span style={{color: "red"}}> - </span>
              31 SUN
            </div>
          </div>
          <div 
            className={datePlaceStyles.dotPattern} 
            style={{width: 500, height: 200}}
          />
        </div>
        <div className={datePlaceStyles.placeContainer}>
          <div className={datePlaceStyles.placeHeadingAndDetail}>
            <div className={`${datePlaceStyles.placeHeading} ${monaSans.className}`}>
              <span style={{color: "magenta"}}>&apos;</span>
              PLACE
            </div>
            <div 
              className={`${datePlaceStyles.placeDetail} ${ibmPlexSansJpSemiBold.className}`}
              style={{fontWeight: 200, fontSize: 25}}
            >
              <span style={{color: "magenta"}}>　|　</span>
              開催場所
            </div>
          </div>
          <div className={`${datePlaceStyles.placeNameLinkContainer} ${ibmPlexSansJpSemiBold.className}`}>
            <div className={datePlaceStyles.placeText}>
              福岡アジア美術館2階 展示室
            </div>
            <Link 
              href="https://maps.app.goo.gl/BV8n5XaqrfYSaiYG7" 
              className={datePlaceStyles.placeLink}
              target="_blank"
            >
              MAP
              <div className={datePlaceStyles.placeLinkArrow}/>
            </Link>
          </div>
        </div>
      </Panel>
      <Panel
        id="members"
        heading="MEMBERS"
        detail="参加団体"
        color="yellow"
      >
        <div style={{borderLeft: "solid 1px #666", padding: "25px"}}>
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${windowSize.width > 1500 ? "2" : "1"}, 1fr)`,
          }}>
            <GroupPanel />
            {windowSize.width > 1500 ? <GroupPanel /> : <></>}
            {groups.map((group, index) => (
              <GroupPanel 
                key={index}
                group={group} 
              />
            ))}
          </div>
          <div className={membersStyles.membersSummaryCard}>
            <div style={{display: "flex"}}>
              <div className={membersStyles.membersSummaryCardText}>
                we are looking for having you join us
              </div>
              <div style={{margin: "0 20px", width: 200, borderBottom: "solid 1px #666", transform: "translateY(-50%)"}} />
            </div>
            <div className={membersStyles.membersSummaryCardNumber}>
              <span style={{fontSize: 70}}>{groups.length}</span>団体
            </div>
          </div>
        </div>
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
