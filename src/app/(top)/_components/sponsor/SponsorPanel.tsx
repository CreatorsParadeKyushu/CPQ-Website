import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sponsor } from "@/types/Sponsor";
import styles from "./SponsorPanel.module.css"

interface SponsorPanelProps {
  sponsor?: Sponsor;
  children?: ReactNode;
}

function SponsorPanel({ sponsor, children }: SponsorPanelProps) {
  if (children) {
    return (
      <div className={styles.sponsorPanel}>
        {children}
      </div>
    )
  }

  if (!sponsor) {
    return (
      <div className={styles.sponsorPanel}>
        <div className={styles.noSponsor}>
          スポンサー募集中
        </div>
      </div>
    )
  }

  const isPlatinum = sponsor.rank === 'platinum';

  const content = (
    <div className={`${styles.sponsorPanel} ${isPlatinum ? styles.platinum : ''}`}>
      <div className={`${styles.logoContainer} ${isPlatinum ? styles.platinumLogo : ''}`}>
        <Image
          alt={`${sponsor.name} logo`}
          src={sponsor.logoSrc}
          fill
          className={styles.logo}
        />
      </div>
      {isPlatinum && (
        <div className={styles.platinumLabel}>
          Platinum Sponsor
        </div>
      )}
      <div className={styles.sponsorName}>
        {sponsor.name}
      </div>
    </div>
  );

  if (sponsor.url) {
    return (
      <Link href={sponsor.url} target="_blank" className={styles.sponsorLink}>
        {content}
      </Link>
    );
  }

  return content;
}

export { SponsorPanel }
