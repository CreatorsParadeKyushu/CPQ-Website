import styles from "./GroupPanel.module.css"
import Link from "next/link";
import { IBM_Plex_Sans_JP, Mona_Sans } from "next/font/google";

type LinkType = "x" | "hp" | "insta";

type Link =
  {
    type: LinkType;
    label?: string;
    href: string;
  }
  |
  {
    type?: LinkType;
    label: string;
    href: string;
  };

interface Group {
  name: string;
  links: Link[];
  belong: string;
}

export type { LinkType, Link, Group };

function LinkType2String(linkType?: LinkType) {
  switch (linkType) {
    case "x":
      return "𝕏(Twitter)";
    case "hp":
      return "HP";
    case "insta":
      return "Instagram"

    default:
      return "link";
  }
}

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "300"
});

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

function GroupPanel({ group }: { group?: Group }) {
  return (
    group ?
      <div className={styles.frame}>
        <div
          className={`${styles.name} ${group.name.match(/^[\x00-\x7f]*$/) ?
            monaSans.className : ibmPlexSansJp.className
            }`}
        >
          {group.name}
        </div>
        <div className={styles.linkContainer}>
          {group.links.map((link, index) => (
            <Link href={link.href} key={index} className={styles.link}>
              <div>
                {link.type ? LinkType2String(link.type) : link.label}
              </div>
              <div className={styles.linkArrow} />
            </Link>
          ))}
        </div>
        <div className={styles.belong}>
          {group.belong ? `(${group.belong})` : ""}
        </div>
      </div>
      :
      <div className={styles.frame}>
        <div style={{ fontSize: 40, color: "yellow" }}>＊</div>
      </div>
  );
}

export { GroupPanel }
