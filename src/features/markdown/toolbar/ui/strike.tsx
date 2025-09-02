"use client";

import { StrikethroughIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useStrike } from "@/features/markdown/toolbar";

export function Strike() {
  const strike = useStrike();

  return (
    <MarkdownToolbarItem
      name="strike"
      icon={StrikethroughIcon}
      isActive={strike.isActive}
      onClick={strike.toggle}
    />
  );
}
