import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';
type CardProps = {
  imageUrl: string;
  title: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, href }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.card}>
        <Image src={imageUrl} width={356} height={327} alt='logo' className={styles.image}/>
        <h3 className={styles.cardTitle}>{title}</h3>
      </a>
    </Link>
  );
}

export default Card;
