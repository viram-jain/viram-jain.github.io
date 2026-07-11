import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollTrail() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="scroll-trail" aria-hidden="true">
      <div className="scroll-trail-line" />
      <motion.div className="scroll-trail-marker" style={{ top }} />
    </div>
  );
}
