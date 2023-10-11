"use client";

import React from "react";
import { useAtom } from "jotai";
import { japaneseAtom, romajiAtom } from "@/data/atoms";

export default function Screen() {
  const [japanese] = useAtom(japaneseAtom);
  const [romaji] = useAtom(romajiAtom);
  return (
    <div id="screen" className="h-[45%] max-w-[800px] mx-auto px-4 py-4">
      <textarea className="w-full h-[5rem] font-semibold text-lg" />
      <p>{romaji}</p>
      <p>{japanese}</p>
    </div>
  );
}
