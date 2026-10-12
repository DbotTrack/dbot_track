import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <span className={styles.logo}>dbottrack.com</span>
        <div className={styles.dot} />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>Something is coming</p>
        <h1 className={styles.heading}>
          We're<br />
          <em>almost</em><br />
          there.
        </h1>
        <div className={styles.divider} />
        <p className={styles.description}>
          dbottrack is being crafted with care.<br />
          We'll be live very soon — stay tuned.
        </p>
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.status}>
          <span className={styles.statusDot} />
          In development
        </span>
        <span className={styles.year}>© 2026 dbottrack</span>
      </div>

      <div className={styles.bgText} aria-hidden="true">soon</div>
    </div>
  )
}
