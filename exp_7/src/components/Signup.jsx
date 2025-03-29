import { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/App.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const inputVariants = {
        focus: {
            scale: 1.02,
            borderColor: '#2a5298',
            boxShadow: '0 0 10px rgba(42, 82, 152, 0.3)',
            transition: { duration: 0.3 },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            background: 'linear-gradient(90deg, #2a5298 0%, #1e3c72 100%)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.95 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-effect"
            style={{
                maxWidth: '450px',
                margin: '3rem auto',
                padding: '2.5rem',
                borderRadius: '20px',
            }}
        >
            <h2
                style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2rem',
                }}
            >
                Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="username"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            color: '#34495e',
                            fontWeight: '500',
                        }}
                    >
                        Username
                    </label>
                    <motion.input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        variants={inputVariants}
                        whileFocus="focus"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#2c3e50',
                            outline: 'none',
                        }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label
                        htmlFor="email"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            color: '#34495e',
                            fontWeight: '500',
                        }}
                    >
                        Email
                    </label>
                    <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variants={inputVariants}
                        whileFocus="focus"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#2c3e50',
                            outline: 'none',
                        }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <label
                        htmlFor="password"
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            color: '#34495e',
                            fontWeight: '500',
                        }}
                    >
                        Password
                    </label>
                    <motion.input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        variants={inputVariants}
                        whileFocus="focus"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#2c3e50',
                            outline: 'none',
                        }}
                        required
                    />
                </div>
                <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    }}
                >
                    Sign Up
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Signup;