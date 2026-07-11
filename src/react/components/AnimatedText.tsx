import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }} aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }} aria-hidden="true">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className}>
      <span className="visually-hidden">{text}</span>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => {
            const globalIndex = charIndex++;
            return <Char key={ci} char={char} index={globalIndex} total={total} progress={scrollYProgress} />;
          })}
          {wi !== words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  );
}
