import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/App.css';

const Navbar = () => {
    const linkVariants = {
        hover: {
            scale: 1.2,
            color: '#ffd700',
            transition: { duration: 0.3, type: 'spring', stiffness: 300 },
        },
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
                background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
                padding: '1.5rem',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
            className="glass-effect"
        >
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    margin: 0,
                    padding: 0,
                }}
            >
                <motion.li whileHover="hover" variants={linkVariants}>
                    <Link
                        to="/"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Home
                    </Link>
                </motion.li>
                <motion.li whileHover="hover" variants={linkVariants}>
                    <Link
                        to="/signup"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Sign Up
                    </Link>
                </motion.li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;