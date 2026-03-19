import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Marquee from './Marquee';

// Import images
import achievementsImg from '../assets/achievements.jpg';
import academicsImg from '../assets/academics.jpg';
import sportsImg from '../assets/badminton-1.jpg';

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section style={{ background: '#050505', paddingBottom: '4rem', overflow: 'hidden' }}>
      <Marquee text="Badminton • Developer • Athlete • Creative • " direction={1} />
      
      <div 
        style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.div style={{ opacity, textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '5rem', 
            marginBottom: '1rem',
            lineHeight: 0.9,
            color: '#fff',
            fontStyle: 'italic'
          }}>
            SHENAN <span className="text-accent">KAVINDA</span>
          </h2>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#888', 
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'var(--font-main)'
          }}>
            Blending the discipline of high performance sports with the precision of AI engineering.
          </p>
          
          <div style={{
            fontSize: '1.1rem',
            color: '#aaa',
            maxWidth: '800px',
            margin: '2rem auto 0',
            lineHeight: '1.8',
            fontFamily: 'var(--font-main)',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I am a Computer Science undergraduate at the Informatics Institute of Technology (IIT) affiliated with the University of Westminster (UoW), driven by a passion for solving complex problems through code. With a strong technical foundation in Python, Java, and the React ecosystem, I have built impactful solutions ranging from <span style={{ color: '#fff' }}>LiftUpLife</span>—a web platform combatting poverty a website for our freshmen year group project, To data-centric applications like <span style={{ color: '#fff' }}>AutoFix</span>, a website for our second year group project. I approach every project with an analytical mindset, eager to turn innovative ideas into functional, user-centric software.
            </p>
            <p>
              My work ethic is rooted in the discipline and resilience of a national-level athlete. As a former <span style={{ color: '#fff' }}>All-Island Rank 4</span> badminton player and more achievements, I have learned the value of consistency, teamwork, and performing under pressure. I am now channeling this growth mindset into my career, seeking opportunities to contribute to forward-thinking development teams.
            </p>
          </div>
        </motion.div>

        {/* Image Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          width: '100%'
        }}>
          {[
            { src: achievementsImg, label: 'ACHIEVEMENTS' },
            { src: academicsImg, label: 'ACADEMICS' },
            { src: sportsImg, label: 'SPORTS' }
          ].map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
               style={{
                 position: 'relative',
                 height: '400px',
                 borderRadius: '20px',
                 overflow: 'hidden',
                 border: '1px solid #222'
               }}
             >
               <img 
                 src={item.src} 
                 alt={`Shenan ${item.label}`} 
                 style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover',
                   filter: 'grayscale(100%)',
                   transition: 'filter 0.3s' 
                 }}
                 onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                 onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
               />
               <div style={{
                 position: 'absolute',
                 bottom: 0,
                 left: 0,
                 width: '100%',
                 padding: '1rem',
                 background: 'linear-gradient(to top, black, transparent)',
                 color: 'var(--accent-color)',
                 fontFamily: 'var(--font-display)',
                 fontSize: '1.5rem'
               }}>
                 {item.label}
               </div>
             </motion.div>
          ))}
        </div>
      </div>
      
      <Marquee text="React • JavaScript • Design • Strategy • " direction={-1} speed={25} />
    </section>
  );
};

export default AboutSection;
