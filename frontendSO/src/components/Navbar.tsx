import { Link } from 'react-router-dom';
import styles from './../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/home">Home</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/syscall">System Calls</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/memo">Memory</Link></li>
                    <li className={styles.navItem}><Link className={styles.navLink} to="/es">E/S</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
