// import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer(){
  return (
    <footer className={styles.container}>
      <div
        style={{display: "flex"}}
      >
        <div
          style={{flexGrow: 1}}
        >
          {/* <Image
            alt="cpq_logo"
            src="/image/cpq.png"
            width={1000}
            height={500}
          /> */}
        </div>
        <div
          style={{flexGrow: 1}}
        >
          <div>
            <div 
              className={styles.linkContainer}
            >
              <Link 
                href={""}
              >
                X (Twitter)
              </Link>
            </div>
            <div 
              className={styles.linkContainer}
            >
              <Link 
                href={""}
              >
                Mail
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{flexGrow: 1}}
        >

        </div>
      </div>
    </footer>
  )
}

export {Footer}
