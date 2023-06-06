import Button from '@/components/button';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Card from '@/components/card';
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const courses = [
    {
      id: 1,
      title: 'Aplikasi Perancangan Perangkat Lunak 2',
      imageUrl: "/course1.png",
      href: '/courses/Aplikasi-Perancangan-Perangkat-Lunak 2',
    },
    {
      id: 2,
      title: 'Algoritma dan Struktur Data',
      imageUrl: "/course2.png",
      href: '/courses/algoritma-struktur-data',
    },
    {
      id: 3,
      title: 'Basis Data',
      imageUrl: "/course3.png",
      href: '/courses/basis-data',
    },
    {
      id: 4,
      title: 'Aplikasi Perancangan Perangkat Lunak 2',
      imageUrl: "/course1.png",
      href: '/courses/Aplikasi-Perancangan-Perangkat-Lunak 2',
    },
    {
      id: 5,
      title: 'Algoritma dan Struktur Data',
      imageUrl: "/course2.png",
      href: '/courses/algoritma-struktur-data',
    },
    {
      id: 6,
      title: 'Basis Data',
      imageUrl: "/course3.png",
      href: '/courses/basis-data',
    },
    {
      id: 7,
      title: 'Aplikasi Perancangan Perangkat Lunak 2',
      imageUrl: "/course1.png",
      href: '/courses/Aplikasi-Perancangan-Perangkat-Lunak 2',
    },
    {
      id: 8,
      title: 'Algoritma dan Struktur Data',
      imageUrl: "/course2.png",
      href: '/courses/algoritma-struktur-data',
    },
    {
      id: 9,
      title: 'Basis Data',
      imageUrl: "/course3.png",
      href: '/courses/basis-data',
    },
  ];
  
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
          <div className={styles.containerMK}>
            <h1 className={styles['title-listMK']}>List Mata Kuliah</h1>
            <div className={styles['card-container']}>
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    title={course.title}
                    imageUrl={course.imageUrl}
                    href={course.href}
                  />
                ))}
            </div>
          </div>
        </div>
        
        
      </Layout>
    </>
  );
}