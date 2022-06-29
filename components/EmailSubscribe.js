import Mailchimp from 'react-mailchimp-subscribe'
import styles from '../styles/EmailSubscribe.module.css'
import useTranslation from 'next-translate/useTranslation'

function EmailSubscribe() {
  const { t } = useTranslation('common')

  return (
    <div className={styles.form}>
      <Mailchimp
        url={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL}
        render={({ subscribe, status, message }) => (
          <form>
            <input type="email" placeholder={t('mailchimp.email')} />
            <button>{t('mailchimp.subscribe')}</button>
          </form>
        )}
      />
    </div>
  )
}

export default EmailSubscribe
