import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, direction = 1, speed = 20 }) => {
  return (
    <div style={{ 
      overflow: 'hidden', 
      display: 'flex', 
      width: '100%',
      background: 'var(--accent-color)',
      color: '#000',
      padding: '0.5rem 0'
    }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: direction === 1 ? "-50%" : "0%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        style={{ 
          display: 'flex', 
          whiteSpace: 'nowrap'
        }}
      >
        {Array(10).fill(text).map((item, index) => (
          <span 
            key={index}
            style={{ 
              fontSize: '2rem', 
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginRight: '2rem'
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
