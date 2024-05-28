import SideNav from './SideNav';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <SideNav />
      </div>
      <div className={styles.main}>
        { children }
      </div>
    </div>
  )
}

export default Layout;
