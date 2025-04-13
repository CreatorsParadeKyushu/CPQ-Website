// import Image from "next/image";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { IBM_Plex_Sans_JP } from "next/font/google";
import FitText from "@/app/components/FitText";

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "500"
});

function Footer(){
  function HeaderLink({id, text}: {id: string, text?: string}) {
    return (
      <div style={{padding: 20}}>
        <Link href={`#${id}`}>
          {text ? text.toUpperCase() : id.toUpperCase()}
        </Link>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div
        style={{display: "flex"}}
      >
        <div
          style={{flexGrow: 1}}
        >
          <Image
            alt="cpq_logo"
            src="/image/cpq.png"
            width={1000}
            height={500}
            style={{
              padding: 120,
              objectFit: "contain"
            }}
          />
        </div>
        <div
          style={{flexGrow: 1}}
        >
          <div>
            <div 
              className={styles.linkContainer}
            >
              <Link 
                href="https://x.com/Creators_Parede"
              >
                X (Twitter)
              </Link>
            </div>
            <div 
              className={styles.linkContainer}
            >
              <Link 
                href="mailto:creators.parade.kyushu@gmail.com"
              >
                Mail
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{flexGrow: 1}}
        >
          <HeaderLink id="about" />
          <HeaderLink id="exhibition" />
          <HeaderLink id="date_place" text="date&place"/>
          <HeaderLink id="members" />
          <HeaderLink id="sponsor" />
          <HeaderLink id="join" />
          <HeaderLink id="contact" />
        </div>
      </div>
      <div style={{paddingRight: 100}}>
        <FitText 
          className={ibmPlexSansJp.className}
        >
          CREATORS PARADE KYUSHU
        </FitText>
      </div>
    </div>
  )
}

export {Footer}
