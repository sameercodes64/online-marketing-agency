import BlogCard from '@/components/Blog/BlogCard';

// Dummy Data
const posts = [
    {
        id: 1,
        title: 'The Future of SEO in 2024',
        excerpt: 'Discover the emerging trends that will define search engine rankings in the coming year, from AI-driven search to voice optimization.',
        date: 'Oct 12, 2023',
    },
    {
        id: 2,
        title: 'Maximizing ROI with PPC',
        excerpt: 'Learn how to fine-tune your paid advertising campaigns to reduce waste and increase conversions with our expert tips.',
        date: 'Nov 05, 2023',
    },
    {
        id: 3,
        title: 'Content That Converts',
        excerpt: 'Why storytelling is the secret weapon of modern marketing brands and how you can leverage it today.',
        date: 'Nov 28, 2023',
    },
    {
        id: 4,
        title: 'Social Media Algorithms Explained',
        excerpt: 'Unlocking the secrets behind the latest algorithm updates on Instagram, LinkedIn, and TikTok.',
        date: 'Dec 15, 2023',
    },
    {
        id: 5,
        title: 'Email Marketing Strategies',
        excerpt: 'Revive your dead email list with these proven re-engagement strategies.',
        date: 'Jan 10, 2024',
    },
    {
        id: 6,
        title: 'Data-Driven Decision Making',
        excerpt: 'How to use analytics to guide your marketing efforts and predict future trends.',
        date: 'Feb 01, 2024',
    },
];

export default function Blog() {
    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                Latest Insights
            </h1>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '4rem' }}>
                Expert perspectives on the ever-evolving world of digital marketing.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
