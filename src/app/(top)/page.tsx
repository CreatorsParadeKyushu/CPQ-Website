'use client'

import Image from "next/image";
import styles from "./page.module.css";
import topStyles from "./top.module.css";
import aboutStyles from "./about.module.css";
import datePlaceStyles from "./dateplace.module.css"
import membersStyles from "./members.module.css";
import sponsorStyles from "./sponsor.module.css";
import joinStyles from "./join.module.css";

import { IBM_Plex_Sans_JP, Mona_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import FloatIn from "../components/ScrollReveal/FloatIn";
import { Panel } from "./_components/Panel";
import { RightBar } from "./_components/RightBar";
import { Genres } from "./_components/exhibition/Genres";
import { GenreHeading } from "./_components/exhibition/GenreHeading";
import { Genre, GenresArray } from "@/types/Genres";
import Link from "next/link";
import { Group, GroupPanel } from "./_components/member/GroupPanel";
import { useWindowSize } from "@/utils/useWindowSize";
import { Sponsor } from "@/types/Sponsor";
import { SponsorPanel } from "./_components/sponsor/SponsorPanel";

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
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const windowSize = useWindowSize();

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
    const fetchSponsors = async () => {
      const res = await fetch("/data/sponsors.json");
      const data = await res.json();

      setSponsors(data.sponsors);
    };
    fetchGroups();
    fetchSponsors();

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
              src="/image/cpq_square.png"
              width={200}
              height={200}
              style={{ outline: "", outlineStyle: "solid", outlineColor: "black" }}
              className={topStyles.image}
            />
          </div>
          <div className={topStyles.title}>
            <div className={`${topStyles.titleText} ${monaSans.className}`}>CREATORS</div>
            <div className={`${topStyles.titleText} ${monaSans.className}`}>PARADE</div>
            <div className={`${topStyles.titleText} ${monaSans.className}`}>KYUSHU</div>
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
              <span style={{ color: "red" }}> - </span>
              31 SUN
            </div>
          </div>
          <div
            className={datePlaceStyles.dotPattern}
            style={{ width: 500, height: 200 }}
          />
        </div>
        <div className={datePlaceStyles.placeContainer}>
          <div className={datePlaceStyles.placeHeadingAndDetail}>
            <div className={`${datePlaceStyles.placeHeading} ${monaSans.className}`}>
              <span style={{ color: "magenta" }}>&apos;</span>
              PLACE
            </div>
            <div
              className={`${datePlaceStyles.placeDetail} ${ibmPlexSansJpSemiBold.className}`}
              style={{ fontWeight: 200, fontSize: 25 }}
            >
              <span style={{ color: "magenta" }}>　|　</span>
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
              <div className={datePlaceStyles.placeLinkArrow} />
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
        <div style={{ borderLeft: "solid 1px #666", padding: "25px" }}>
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
            <div style={{ display: "flex" }}>
              <div className={membersStyles.membersSummaryCardText}>
                we are looking for having you join us
              </div>
              <div style={{ margin: "0 20px", width: 200, borderBottom: "solid 1px #666", transform: "translateY(-50%)" }} />
            </div>
            <div className={membersStyles.membersSummaryCardNumber}>
              <span style={{ fontSize: 70 }}>{groups.length}</span>団体
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
        <div className={sponsorStyles.container}>
          {sponsors.length > 0 ? sponsors.map((sponsor, index) => (
            <SponsorPanel key={index}>
              <Image
                alt="logo"
                src={sponsor.logoSrc}
                width={200}
                height={200}
              />
            </SponsorPanel>
          ))
            :
            <SponsorPanel>
              募集中
            </SponsorPanel>
          }
        </div>
      </Panel>
      <Panel
        id="join"
        heading="JOIN"
        detail="参加方法"
        color="orange"
      >
        <div style={{ display: "flex" }}>
          <div style={{padding: 50, flexGrow: 2}}>
            <div className={joinStyles.headingAbout}>
              <span style={{ fontSize: 10, color: "#ffaf00", verticalAlign: "middle" }}>◆　</span>
              参加申し込みについて
              <span style={{ fontSize: 10, color: "#ffaf00", verticalAlign: "middle" }}>　◆</span>
            </div>
            <Link 
              href="https://example.com"
              className={`${joinStyles.googleForm} ${ibmPlexSansJp.className}`}
            >
              Google Form
            </Link>
            <div style={{textAlign: "center"}}>
              上記Googleフォームに回答してください
            </div>
            <div style={{textAlign: "center"}}>
              具体的に必要となる情報につきましても、Googleフォームの案内に従って入力をお願いします
            </div>
          </div>
          <div 
            style={{padding: 10, flexGrow: 3}}
            className={ibmPlexSansJp.className}
          >
            <div
              className={joinStyles.detailContainer}
              style={{ borderTop: "solid 1px #666" }}
            >
              <div className={joinStyles.heading}>
                <span style={{ fontSize: 10, verticalAlign: "middle", color: "#ffaf00" }}>◆　</span>
                参加条件
              </div>
              <ul className={joinStyles.list}>
                <li>九州地方の大学、専門学校に所属している学生が運営する1次創作団体であること</li>
                <li>各校の公認の是非は問わない</li>
                <li>反社会的組織とのつながりがないこと</li>
              </ul>
            </div>
            <div
              className={joinStyles.detailContainer}
              style={{ borderTop: "solid 1px #666" }}
            >
              <div className={joinStyles.heading}>
                <span style={{ fontSize: 10, verticalAlign: "middle", color: "#ffaf00" }}>◆　</span>
                展示可能作品
              </div>
              <ul className={joinStyles.list}>
                <li>企画概要に記した各ジャンルの作品。</li>
                <li>1次創作のみを展示可能。2次創作作品の展示は禁止とする。</li>
                <li>R-18Gに相当する作品は展示禁止とする。</li>
                <li>公序良俗に反し、政治的思想や危険思想をはらんだ作品は展示禁止とする。</li>
                <li>未公開作品に限らず、過去制作した作品の展示も可能とする。</li>
              </ul>
            </div>
            <div
              className={joinStyles.detailContainer}
              style={{ borderTop: "solid 1px #666" }}
            >
              <div className={joinStyles.heading}>
                <span style={{ fontSize: 10, verticalAlign: "middle", color: "#ffaf00" }}>◆　</span>
                展示における貸与品・備品について
              </div>
              <div style={{display: "flex", padding: "0 0 0 30px"}}>
                <div style={{padding: 10}}>
                  <div>
                    各団体には以下のものをこちらから貸与可能です。
                  </div>
                  <ul className={joinStyles.listTwoColumn}>
                    <li>机</li>
                    <li>椅子</li>
                    <li>モニター</li>
                    <li>延長コード</li>
                  </ul>
                </div>
                <div style={{padding: 10, marginLeft: 20}}>
                  <div>
                    希望者向け（数に限りがあるため）
                  </div>
                  <ul className={joinStyles.list}>
                    <li>立体（白）</li>
                    <li>展示スタンド</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={joinStyles.detailContainer}
              style={{ borderTop: "solid 1px #666" }}
            >
              <div className={joinStyles.heading}>
                <span style={{ fontSize: 10, verticalAlign: "middle", color: "#ffaf00" }}>◆　</span>
                展示装飾について
              </div>
              <div>
                「１　企画概要」に記述の通り、各団体にはコンセプトを設定していただき、それに従いブースの装飾を行っていただきます。<br/>
                コンセプトは各団体自由に設定してください。
                展示する作品に合わせて設定することも、コンセプトに沿って作品を制作することも自由に決定していただいて問題ありません。<br/>
                ブース装飾例につきましては参加アンケート回答後の面談にて詳しく説明いたします。<br/>
                展示ブースの詳細（広さなど）につきましては参加団体が決定次第追って連絡いたします。
              </div>
            </div>
          </div>
        </div>
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
