'use client'

import Image from "next/image";
import styles from "./page.module.css";
import topStyles from "./top.module.css";

import { Zen_Maru_Gothic } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

const zenMaruGothic = Zen_Maru_Gothic({ 
  weight: "300",
  subsets: ["latin"]
 });

function Panel(params: {children?: ReactNode, id: string, heading: string, detail: string, color: string}){
  return (
  <div className={styles.backBlackPanel} id={params.id}>
    <div className={styles.headingAndDetail}>
      <span className={styles.heading}>
        <span style={{color: params.color}}>&apos;</span>
        {params.heading}
      </span>
      <span className={styles.detail}>
      <span style={{color: params.color}}>　|　</span>
      {params.detail}
      </span>
    </div>
    <div>
      {params.children}
    </div>
  </div>
  );
}

function RightBar(params: {isVisible: boolean}) {
  const [headingIndex, setHeadingIndex] = useState(0);
  const colors = ["white", "cyan", "lime", "red", "yellow", "blue", "orange", "aquamarine"];

  const updateHeadingIndex = () => {
    setHeadingIndex(Math.floor((window.scrollY + window.innerHeight / 4) / window.innerHeight));
  }

  useEffect(() => {
    updateHeadingIndex();
    window.addEventListener("scroll", updateHeadingIndex);
    return () => window.removeEventListener("scroll", updateHeadingIndex);
  }, []);
  
  function Heading(params: {id: string, text: string, color: string, text2?: string, color2?: string, index: number}){
    
    return (<>
      <Link href={`#${params.id}`} scroll>
      <div 
        className={styles.rightBarHeading}
        style={{
          color: headingIndex === params.index ? params.color : "white"
        }}
      >
        {params.text}
      </div>
      </Link>
    </>)
  }
  
  return (
    <div className={`${styles.rightBar} ${params.isVisible ? styles.visible : ""}`}>
      <div >
        <Image
          alt="cpq"
          src="/cpq_prepare.png"
          width={200}
          height={200}
          className={styles.rightBarImage}
        />
      </div>
      <div className={styles.rightBarHeadingContainer}>
        <div 
          className={styles.rightBarBlock} 
          style={{backgroundColor: colors[headingIndex]}}
        />
        <Heading id="about" text="ABOUT" color="cyan" index={1} />
        <Heading id="exhibition" text="EXHIBITION" color="lime" index={2} />
        <Heading id="date_place" text="DATE" color="red" text2="PLACE" color2="magenta" index={3} />
        <Heading id="members" text="MEMBERS" color="yellow" index={4} />
        <Heading id="sponsor" text="SPONSOR" color="blue" index={5} />
        <Heading id="join" text="JOIN" color="orange" index={6} />
        <Heading id="contact" text="CONTACT" color="aquamarine" index={7} />
      </div>
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.scrollY >= window.innerHeight * 3 / 4)
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
          CREATORS PARADE KYUSHU
        </div>
      </div>
      <RightBar isVisible={isVisible}/>
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
      </Panel>
      <Panel 
        id="exhibition"
        heading="EXHIBITION GENRE"
        detail="展示ジャンル"
        color="lime"
      >
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
