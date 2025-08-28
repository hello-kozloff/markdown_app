"use client";

import { ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { motion } from "framer-motion";

export const markdownContentMotion = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    type: "tween"
  }
};

export function MarkdownContent() {
  return (
    <motion.div
      {...markdownContentMotion}
      className="h-full max-w-2xl w-full mx-auto p-12 prose outline-0"
    >
      <ProseMirrorDoc />
    </motion.div>
  );
}
