import styles from './Services.module.css';

const services = [
    {
        title: 'SEO Optimization',
        desc: 'Climb the rankings with our advanced search engine optimization strategies tailored for your niche.',
        icon: '🚀',
    },
    {
        title: 'Content Marketing',
        desc: 'Engage your audience with compelling storytelling and value-driven content that converts.',
        icon: '✍️',
    },
    {
        title: 'PPC Advertising',
        desc: 'Maximize ROI with precision-targeted paid campaigns across Google, Facebook, and LinkedIn.',
        icon: '🎯',
    },
];

const Services = () => {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.heading}>
                <h2>Our Expertise</h2>
                <p>Comprehensive solutions for modern brands.</p>
            </div>
            <div className={styles.grid}>
                {services.map((s, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.icon}>{s.icon}</div>
                        <h3 className={styles.cardTitle}>{s.title}</h3>
                        <p className={styles.cardDesc}>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
