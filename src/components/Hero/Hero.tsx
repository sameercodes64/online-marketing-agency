import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Elevate Your <br /> Digital Presence
            </h1>
            <p className={styles.subtitle}>
                We craft data-driven marketing strategies that transform your online potential into measurable growth.
            </p>
            <div className={styles.buttonGroup}>
                <Link href="/#services">
                    <button className={styles.primaryBtn}>Explore Services</button>
                </Link>
                <Link href="/blog">
                    <button className={styles.secondaryBtn}>Read Insights</button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
