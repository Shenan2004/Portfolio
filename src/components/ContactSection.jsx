import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <footer 
      style={{ 
        padding: '6rem 2rem', 
        background: '#000000ff', 
        color: '#fff', 
        textAlign: 'center',
        borderTop: '1px solid #111',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(203, 242, 80, 0.05) 0%, rgba(0,0,0,0) 70%)', 
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '10vw', lineHeight: 0.9, marginBottom: '2rem', color: '#fff' }}>
          LET'S <span className="text-accent" style={{ color: 'var(--accent-color)' }}>RACE</span>.
        </h2>
        
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
          AVAILABLE FOR FREELANCE WORK & PARTNERSHIPS
        </p>

        <motion.a
          href="mailto:shenandim@gmail.com"
          whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-color)', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            display: 'inline-block',
            padding: '1.5rem 4rem', 
            fontSize: '1.5rem', 
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            background: 'transparent', 
            border: '1px solid var(--accent-color)', 
            color: 'var(--accent-color)', 
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Start a Project
        </motion.a>

        <div style={{ 
          marginTop: '6rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          borderTop: '1px solid #111', 
          paddingTop: '2rem',
          fontSize: '0.9rem',
          color: '#444'
        }}>
          <div>© 2026 SHENAN</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#444' }}>INSTAGRAM</a>
            <a href="mailto:shenandim@gmail.com" style={{ color: '#444' }}>shenandim@gmail.com</a>
            <a href="https://www.linkedin.com/in/shenan-dimbukkuwalage-9b70a8331/" style={{ color: '#444' }}>LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
