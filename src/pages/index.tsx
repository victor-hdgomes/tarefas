import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'

import hero from '@/assets/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image className={styles.hero} alt='Logo Tarefas+' src={hero} priority />
          <h1 className={styles.title}>Sistema feito para você organizar <br /> seus estudos e tarefas</h1>
        </div>
      </main>
    </div>
  )
}
