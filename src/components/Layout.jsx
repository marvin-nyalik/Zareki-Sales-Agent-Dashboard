import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {isMobile && (
        <nav>
          <div className={styles.brand}>
            <h3 className='pl-2'>ZAREKA DASHBOARD</h3>
            {!showMenu ? 
            (
              <i onClick={toggleMenu} className='bx bx-md bx-menu pr-3'></i>
            ) : (
              <i className='bx bx-md bx-window-close pr-3' onClick={toggleMenu}></i>
            )}
          </div>
          {showMenu && (
            <div className={styles['mobile-nav']}>
              <ul className={styles['mobile-bar']}>
                <li className='py-2'>
                  <Link to='/'>Dashboard</Link>
                </li>
                <li>
                  <Link to='/schools'>Schools</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      )}
      <div className={styles.container}>
        {!isMobile && 
          (<div className={styles.sidenav}>
            <SideNav />
          </div>)
        }
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout;
