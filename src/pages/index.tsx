import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'

import hero from '@/assets/hero.png'
import { db } from '@/services/firebaseConnection'
import { collection, getDocs } from 'firebase/firestore'

interface IHome {
  tarefas: number;
  comments: number;
}

export default function Home({ tarefas, comments }: IHome) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image className={styles.hero} alt='Logo Tarefas+' src={hero} priority />
          <h1 className={styles.title}>Sistema feito para você organizar <br /> seus estudos e tarefas</h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+{tarefas} posts</span>
            </section>
            <section className={styles.box}>
              <span>+{comments} comentários</span>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const commentRef = collection(db, 'comments');
  const tarefasRef = collection(db, 'tarefas');

  const commentsSnapshot = await getDocs(commentRef);
  const tarefasSnapshot = await getDocs(tarefasRef);

  return {
    props: {
      tarefas: tarefasSnapshot.size || 0,
      comments: commentsSnapshot.size || 0
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
