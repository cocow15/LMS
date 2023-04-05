import Button from '@/components/button';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout';
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  
  return (
    <>
      <Layout pageTitle='Home Page'>
        <div>
          <div className={styles.container}>
            <div className={styles.text}>
              <h1 className={styles['title-homepage']}>Selamat Datang Lina di <br></br>Dashboard LMS JTK!</h1>
              <p className={styles.description}>"Belajar adalah investasi terbaik yang bisa dilakukan <br></br>seseorang terhadap dirinya sendiri." - Franklin D. <br></br>Roosevelt</p>
              <Button label="Mulai Belajar Sekarang" onClick={handleClick} />
            </div>

            <div className={styles.image}>
              <Image src="/imgDashboard.png" width={600} height={430} alt='logo'/>
            </div>
      
          </div>

        </div>
        
        
      </Layout>
    </>
  );
}