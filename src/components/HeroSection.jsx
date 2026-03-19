import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div 
      ref={ref} 
      style={{ 
        height: '100vh', 
        width: '100%', 
        overflow: 'hidden', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000ff'
      }}
    >
      {/* Background Grid/Lines */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(203, 242, 80, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 242, 80, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }} />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: yText, zIndex: 10, textAlign: 'center', mixBlendMode: 'difference' }}
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          style={{ 
            fontSize: '12vw', 
            lineHeight: 0.8,
            color: '#fff',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          CREATIVE <br />
          <span className="text-accent" style={{ color: 'var(--accent-color)' }}>DEVELOPER</span>
        </motion.h1>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          letterSpacing: '2px'
        }}
      >
        SCROLL TO START
      </motion.div>
    </div>
  );
};

export default HeroSection;
