import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AutoFix",
    category: "WEBSITE",
    description: "Service Providing Platform",
    span: "col-span-2",
    link: "https://www.autofix.lk/"
  },
  {
    id: 2,
    title: "LiftUpLife",
    category: "WEBSITE",
    description: "Poverty Alleviation",
    span: "col-span-1",
    link: "https://shenan2004.github.io/LiftupLife.com/"
  },
  {
    id: 3,
    title: "VN LOGISTICS",
    category: "WEBSITE",
    description: "A Website For Emerging Logistics Company",
    span: "col-span-1",
    link: "https://www.vnlogistics.lk/"
  },
  {
    id: 4,
    title: "Cashzi",
    category: "Finance Managment Website",
    description: "A Website For Finance Managment",
    span: "col-span-2",
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        padding: '6rem 2rem',
        background: '#0a0a0a'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '5rem', 
          marginBottom: '4rem',
          textAlign: 'left',
          color: '#fff'
        }}>
          SELECTED <span className="stroke-text">WORKS</span>
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                borderColor: 'var(--accent-color)',
                backgroundColor: 'rgba(255,255,255,0.03)'
              }}
              style={{
                gridColumn: project.span === 'col-span-2' ? 'span 2' : 'span 1',
                background: '#050505',
                padding: '2rem',
                border: '1px solid #222',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '300px',
                transition: 'border-color 0.3s',
                textDecoration: 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem'
              }}>
                0{index + 1}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <span style={{ 
                  color: '#666', 
                  fontSize: '0.9rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px' 
                }}>
                  {project.category}
                </span>
                <h3 style={{ 
                  fontSize: '2.5rem', 
                  margin: '0.5rem 0', 
                  lineHeight: 1,
                  color: '#fff'
                }}>
                  {project.title}
                </h3>
                <p style={{ color: '#888' }}>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
