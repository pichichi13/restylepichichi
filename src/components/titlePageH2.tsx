import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface props {
  title: string;
}


const TitlePageH2: React.FC<props> = ({ title }) => {
  
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Quando il 50% dell'elemento è visibile
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      {/*
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 50 : 100 }}
        transition={{ 
          duration: 1 
        }}
      >
        <h2>{title}</h2>
      </motion.div>
      */}

      <motion.div
        className="title-section"
        ref={ref}
        initial={{ opacity: 0}}
        animate={{ opacity: inView ? 1 : 0}}
        transition={{ 
          duration: 1 
        }}
      >
        <h2>{title}</h2>
      </motion.div>
      
    </>
  )
}

export default TitlePageH2
