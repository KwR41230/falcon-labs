import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
}

const lineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const charVariants = {
  hidden: { scale: 1, rotate: 0 },
  visible: { scale: [1, 1.8, 1], rotate: [0, 15, 0] },
};

export default function SplitText({ text, className = '' }: SplitTextProps) {
  const splitText = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="word inline-block mr-3 align-baseline">
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            className="char inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-[length:200%_200%] animate-gradient-shift bg-clip-text text-transparent"
            style={{
              lineHeight: '1.2',
              paddingBottom: '2px'
            }}
            variants={charVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: (wordIndex * 0.3) + (charIndex * 0.05),
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ));
  };

  return (
    <div className={`${className} break-normal leading-tight md:leading-relaxed`}>
      {splitText(text)}
    </div>
  );
}