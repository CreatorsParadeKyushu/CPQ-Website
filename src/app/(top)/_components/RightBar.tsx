import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import rightBarStyles from "./rightBar.module.css"
import { IBM_Plex_Sans_JP } from "next/font/google";

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "100"
});

function RightBar(params: { isVisible: boolean }) {
  const [headingIndex, setHeadingIndex] = useState(0);
  const colors = ["white", "cyan", "lime", "red", "yellow", "blue", "orange", "#0fb"];

  const updateHeadingIndex = () => {
    setHeadingIndex(Math.floor((window.scrollY + window.innerHeight / 4) / window.innerHeight) - 1);
  }

  useEffect(() => {
    updateHeadingIndex();
    window.addEventListener("scroll", updateHeadingIndex);
    return () => window.removeEventListener("scroll", updateHeadingIndex);
  }, []);

  function Heading(params: { id: string, text: string, color: string, text2?: string, color2?: string, index: number }) {

    return (<>
      <Link href={`#${params.id}`} scroll>
        <div
          className={`${rightBarStyles.Heading} ${ibmPlexSansJp.className}`}
          style={{
            color: headingIndex === params.index ? params.color : "white"
          }}
        >
          {params.text}
          {params.text2 ? <>
            <span style={{ color: "white" }}>&</span>
            <span style={{ color: headingIndex === params.index ? params.color2 : "white" }}>{params.text2}</span>
          </> : ""}
        </div>
      </Link>
    </>)
  }

  return (
    <div className={`${rightBarStyles.rightBar} ${params.isVisible ? rightBarStyles.visible : ""}`}>
      <Link href="#top" >
        <Image
          alt="cpq"
          src="/image/cpq_square.png"
          width={200}
          height={200}
          className={rightBarStyles.Image}
        />
      </Link>
      <div className={rightBarStyles.HeadingContainer}>
        <div
          className={rightBarStyles.Block}
          style={headingIndex === 3 ? { background: `linear-gradient(to right, ${colors[headingIndex]}, magenta)` } : { backgroundColor: colors[headingIndex] }}
        />
        <Heading id="about" text="ABOUT" color="cyan" index={1} />
        <Heading id="exhibition" text="EXHIBITION" color="lime" index={2} />
        <Heading id="date_place" text="DATE" color="red" text2="PLACE" color2="magenta" index={3} />
        <Heading id="members" text="MEMBERS" color="yellow" index={4} />
        <Heading id="sponsor" text="SPONSOR" color="blue" index={5} />
        <Heading id="join" text="JOIN" color="orange" index={6} />
        <Heading id="contact" text="CONTACT" color="#0fb" index={7} />
      </div>
    </div>
  );
}

export { RightBar };
