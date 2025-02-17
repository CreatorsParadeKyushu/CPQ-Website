import { ReactNode } from "react";
import panelStyles from "./panel.module.css"

function Panel(params: { children?: ReactNode, id: string, heading: string, detail: string, color: string }) {
  return (
    <div className={panelStyles.backBlackPanel} id={params.id}>
      <div className={panelStyles.headingAndDetail}>
        <span className={panelStyles.heading}>
          <span style={{ color: params.color }}>&apos;</span>
          {params.heading}
        </span>
        <span className={panelStyles.detail}>
          <span style={{ color: params.color }}>　|　</span>
          {params.detail}
        </span>
      </div>
      <div className={panelStyles.panelChildrenContainer}>
        {params.children}
      </div>
    </div>
  );
}

export {Panel};
