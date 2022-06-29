import Mailchimp from 'react-mailchimp-subscribe'
import styles from '../styles/EmailSubscribe.module.css'
import { useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ClipLoader from 'react-spinners/ClipLoader'

function renderEmailForm(t, { email }) {
  const render = ({ subscribe, status, message }) => (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (!email.current || !email.current.value) { return }

      subscribe({ EMAIL: email.current.value })
      event.target.reset()
    }}>
      <input disabled={status === 'sending'} ref={email} type="email" placeholder={t('mailchimp.email')} />
      <button type="submit">
        <span className={status === 'sending' ? styles.submit : null}>{t('mailchimp.subscribe')}</span>
        <ClipLoader className={status === 'sending' ? styles.loader : styles.hidden} size={20} />
      </button>
      <p className={styles.message}>{message}</p>
    </form>
  )
  return render
}

export default function EmailSubscribe() {
  const email = useRef()
  const { t } = useTranslation('common')

  return (
    <div className={styles.form}>
      <Mailchimp
        url={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL}
        render={renderEmailForm(t, { email })}
      />
    </div>
  )
}
