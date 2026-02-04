import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Elevate
            </Link>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/blog" className={styles.link}>
                    Blog
                </Link>
                <Link href="/#services" className={styles.link}>
                    Services
                </Link>
            </div>
            <button className={styles.cta}>Get Started</button>
        </nav>
    );
};

export default Navbar;
