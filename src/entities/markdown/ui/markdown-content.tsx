"use client";

import { ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { motion } from "framer-motion";

export const markdownContentMotion = {
  initial: {
    opacity: 0,
    y: 4
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.4
  }
};

export function MarkdownContent() {
  return (
    <motion.div
      {...markdownContentMotion}
      className="h-full max-w-2xl w-full mx-auto px-4 py-6 xs:p-12 prose outline-0"
    >
      <ProseMirrorDoc />
    </motion.div>
  );
}
