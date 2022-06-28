import Mailchimp from 'react-mailchimp-subscribe'
import styles from '../styles/EmailSubscribe.module.css'

function EmailSubscribe() {
  return (
    <div className={styles.form}>
      <Mailchimp url={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL} />
    </div>
  )
}

export default EmailSubscribe
