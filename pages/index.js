import Head from 'next/head'
import Image from 'next/image'
import EmailSubscribe from '../components/EmailSubscribe'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Operation Gannet</title>
        <meta name="description" content="Something's coming, something good..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            You've reached Operation Gannet! 🤫
          </h1>

          <p className={styles.description}>
            We're hard at work getting set up to bring you inspiring stories, beautifully told.
          </p>

          <p className={styles.subtitle}>
            Subscribe to hear more from us!&nbsp;<i>(We won't spam you, ever)</i>
          </p>
          <EmailSubscribe />
        </div>

        <div className={styles.background} />
      </main>
    </div>
  )
}
