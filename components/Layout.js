import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <a rel="logo" className={styles.logo} href="/">unremarkable</a>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}