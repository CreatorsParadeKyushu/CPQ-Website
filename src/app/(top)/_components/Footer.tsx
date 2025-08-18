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

function Footer() {
  function HeaderLink({ id, text }: { id: string, text?: string }) {
    return (
      <div className={styles.headerLink}>
        <Link href={`#${id}`}>
          {text ? text.toUpperCase() : id.toUpperCase()}
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <Image
            alt="cpq_logo"
            src="/image/cpq.png"
            width={1000}
            height={500}
            className={styles.logo}
          />
        </div>
        <div className={styles.linksSection}>
          <div className={styles.externalLinks}>
            <div className={styles.linkContainer}>
              <Link href="https://x.com/Creators_Parede">
                X (Twitter)
              </Link>
            </div>
            <div className={styles.linkContainer}>
              <Link href="mailto:creators.parade.kyushu@gmail.com">
                Mail
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navigationSection}>
          <HeaderLink id="about" />
          <HeaderLink id="exhibition" />
          <HeaderLink id="date_place" text="date&place" />
          <HeaderLink id="members" />
          <HeaderLink id="sponsor" />
          <HeaderLink id="join" />
          <HeaderLink id="contact" />
        </div>
      </div>
      <div className={styles.titleSection}>
        <FitText
          className={ibmPlexSansJp.className}
        >
          CREATORS PARADE KYUSHU
        </FitText>
      </div>
    </div>
  )
}

export { Footer }
