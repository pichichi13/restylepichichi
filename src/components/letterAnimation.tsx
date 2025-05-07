import { motion } from 'framer-motion';

const LetterAnimation = () => {
  const word = "Donatella";  // La parola da animare

  // Ogni lettera sarà animata singolarmente
  const letterVariants = {
    initial: {
      opacity: 0,        // La lettera parte con opacità 0
      x: -100,             // La lettera parte 2px più in alto
    },
    animate: {
      opacity: 1,        // La lettera diventa completamente visibile
      x: 0,              // La lettera si sposta alla sua posizione originale (0px)
      transition: {
        type: 'spring',
        stiffness: 100,  // Rende l'animazione più "rigida" e reattiva
        damping: 25,      // Controlla il rimbalzo
      }
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: index * 3, // Ritardo progressivo per ogni lettera
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default LetterAnimation;
