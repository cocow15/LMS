import styles from './Footer.module.css';
import Image from 'next/image';
export default function Footer(){

    return(
        <>
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="/Logo LMS.png" width={80} height={80} alt='logo'/>
                <div>
                    <p className={styles.text1}>
                        Virtual Class <br /> JTK Polban
                    </p>
                </div>
            </div>
            
            <div className={styles.textContainer}>
                <div>
                    <p className={styles.text2}>
                        Privacy Policy
                    </p>
                </div>
                <div>
                    <p className={styles.text2}>
                        Terms & Conditions
                    </p>
                </div>
            </div>
            <p className={styles.text3}>
                © 2023 AONE. 
            </p>
        </div>
        </>

    )

}