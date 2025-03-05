import Image from "next/image";
import styles from "./GroupPanel.module.css"
import Link from "next/link";
import { LinkArrow } from "@/app/components/LinkArrow";

type LinkType = "x" | "hp";

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
  fullname: string;
  iconSrc: string;
  links: Link[];
  belong: string;
}

export type {LinkType, Link, Group};

function LinkType2String(linkType?: LinkType) {
  switch (linkType) {
    case "x":
      return "𝕏(Twitter)";    
    case "hp":
      return "HP";    
  
    default:
      return "link";
  }
}

function GroupPanel({ group }: { group: Group }) {
  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <Image
          alt="icon"
          src={group.iconSrc}
          width={300}
          height={300}
        />
        <div className={styles.nameContainer}>

        </div>
        <div className={styles.linkContainer}>
          {group.links.map((link, i) => 
            <div key={`link-container-${i}`}>
              <Link 
                key={`link-${i}`} 
                href={link.href}
              >
                {
                  link.label ? link.label : LinkType2String(link.type)
                }
                <LinkArrow 
                  key={`link-arrow-${i}`} 
                  strokeColor="yellow" 
                  width={15}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={styles.belongText}>
        ({group.belong})
      </div>
    </div>
  );
}

export { GroupPanel }
