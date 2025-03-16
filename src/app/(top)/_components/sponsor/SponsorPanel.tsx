import { ReactNode } from "react";
import styles from "./SponsorPanel.module.css"

function SponsorPanel({children}: {children: ReactNode}){
  return (
    <div className={styles.sponsorPanel}>
      {children}
    </div>
  )
}

export {SponsorPanel}
