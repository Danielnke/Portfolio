import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
};

export default function AnimatedTitle({
    text,
    className,
    wordSpace,
    charSpace,
}: AnimatedTitleProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const stagger = 0.05;

    return (
        <h2 aria-label={text} className={className}>
            {text.split(" ").map((word, index) => {
                return (
                    <motion.span
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: stagger,
                        }}
                        className={`inline-block whitespace-nowrap ${wordSpace}`}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                    className={`inline-block ${charSpace}`}
                                >
                                    {character}
                                </motion.span>
                            );
                        })}
                    </motion.span>
                );
            })}
        </h2>
    );
}
