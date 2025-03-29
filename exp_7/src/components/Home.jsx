import { motion } from 'framer-motion';
import '../css/App.css';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hover: { scale: 1.1, rotate: 2, transition: { duration: 0.4 } },
    };

    return (
        <motion.div
            className="home-container glass-effect"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                margin: '2rem auto',
                maxWidth: '1200px',
                flex: 1,
            }}
        >
            <motion.div
                variants={childVariants}
                whileHover="hover"
                style={{ flex: 1, textAlign: 'center' }}
            >
                <motion.img
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    alt="Nature Landscape"
                    variants={imageVariants}
                    style={{
                        maxWidth: '100%',
                        borderRadius: '15px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    }}
                />
            </motion.div>
            <motion.div
                variants={childVariants}
                style={{ flex: 1, padding: '2rem', color: '#2c3e50' }}
            >
                <h1
                    style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Welcome to Our Platform
                </h1>
                <p
                    style={{
                        fontSize: '1.3rem',
                        lineHeight: '1.8',
                        color: '#34495e',
                        marginTop: '1rem',
                    }}
                >
                    Embark on a journey of discovery with us. Whether you're here to connect,
                    learn, or grow, our platform offers a vibrant community and endless
                    opportunities. Join us today and let’s create something amazing together!
                </p>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#2a5298' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        marginTop: '2rem',
                        padding: '0.75rem 2rem',
                        backgroundColor: '#1e3c72',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    }}
                >
                    Explore Now
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Home;