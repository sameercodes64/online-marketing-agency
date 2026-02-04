import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                {/* Placeholder for image */}
            </div>
            <div className={styles.content}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={`#`} className={styles.readMore}>
                    Read Article &rarr;
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
