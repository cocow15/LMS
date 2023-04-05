import Link from "next/link";
import styles from './Header.module.css';
import Image from "next/image";

export default function Header(){

    return(
        <header className={styles.container}>
            <Image src="/Logo LMS.png" width={60} height={60} alt='logo' className={styles.image}/>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/" legacyBehavior>
                    <a>Beranda</a>
                    </Link>
                </li>
                <li className={styles.item}><Link href="/register" legacyBehavior><a>Mata Kuliah</a></Link></li>
                <li className={styles.item}><Link href="/users" legacyBehavior><a>Tentang Kami</a></Link></li>
                <li className={styles.item}><Link href="/blog" legacyBehavior><a>Profile</a></Link></li>
            </ul>
        </header>

    )

}