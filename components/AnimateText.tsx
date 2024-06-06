import React from "react";
import { motion } from "framer-motion";

const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const tagMap: { [key: string]: keyof JSX.IntrinsicElements } = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedCharacters: React.FC<{
  text: string;
  type: string;
  hiddenColor: string;
  visibleColor: string;
  className: string;
}> = (props) => {
  const item = {
    hidden: {
      y: "200%",
      color: props.hiddenColor,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.05,
      },
    },
    visible: {
      y: 0,
      color: props.visibleColor,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.09,
      },
    },
  };

  const splitWords = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of Array.from(splitWords.entries())) {
    words.push(item.split(""));
  }

  words.forEach((word) => {
    word.push("\u00A0");
  });

  const Tag = tagMap[props.type];

  return (
    <Tag className="max-h-20">
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.map((element, charIndex) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={charIndex}
              className="pb-3"
            >
              <motion.span
                style={{
                  display: "inline-block",
                }}
                variants={item}
                className={props.className}
              >
                {element}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

export default AnimatedCharacters;
