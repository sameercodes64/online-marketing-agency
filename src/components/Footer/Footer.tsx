import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} Elevate Marketing. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
