import Head from 'next/head'
import EmailSubscribe from '../components/EmailSubscribe'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import { fetchProductions } from '../datasources/notion'

export default function Home({ productions }) {
  const { t } = useTranslation('home')

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('common:meta.title')}</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.description}>{t('subtitle')}</p>
          <p className={styles.subtitle}>{t('subscribe')}</p>
          <EmailSubscribe />
        </div>

        <div className={styles.background} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { productions: await fetchProductions() } }
}
