import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingTextProps {
  phrases: string[];
  className?: string;
}

const TypingText = ({ phrases, className = "" }: TypingTextProps) => {
  const { text, isTyping } = useTypingEffect({
    phrases,
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
      />
    </span>
  );
};

export default TypingText;
