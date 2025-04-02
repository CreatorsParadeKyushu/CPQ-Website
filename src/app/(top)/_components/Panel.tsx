import { Mona_Sans, IBM_Plex_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import panelStyles from "./panel.module.css";

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})
const ibmPlexSansJp = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: "300"
});

function Panel(params: { children?: ReactNode, id: string, heading: string, detail: string, color: string }) {
  return (
    <div 
      className={panelStyles.backBlackPanel} 
      style={params.id === "contact" ? 
        {height: "50vh", minHeight: "50vh"} :
        {}
      } 
      id={params.id}
    >
      <div className={panelStyles.headingAndDetail}>
        <span className={`${panelStyles.heading} ${monaSans.className}`} 
          style={{fontSize: 68, fontWeight: 600}}>
          <span style={{ color: params.color }}>&apos;</span>
          {params.heading}
        </span>
        <span className={`${panelStyles.detail} ${ibmPlexSansJp.className}`}
              style={{fontWeight: 200, fontSize: 25}}>
          <span style={{ color: params.color }} >　|　</span>
          {params.detail}
        </span>
      </div>
      <div style={{gridColumn: "1", gridRow: "2", backgroundColor: "red"}} />
      <div className={panelStyles.panelChildrenContainer}>
        {params.children}
      </div>
    </div>
  );
}

export {Panel};
