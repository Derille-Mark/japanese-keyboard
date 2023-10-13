"use client";

import React from "react";
import { useAtom } from "jotai";
import { japaneseAtom, romajiAtom } from "@/data/atoms";

const textStyle = "h-[30%] outline-none border-2 rounded-md p-1";

export default function Screen() {
  const [japanese] = useAtom(japaneseAtom);
  const [romaji] = useAtom(romajiAtom);
  return (
    <div id="screen" className="h-[45%] max-w-[800px] mx-auto px-4 py-4">
      <div className="flex flex-col h-full gap-1">
        <textarea
          placeholder="Reference"
          className={`${textStyle} `}
          name=""
          id=""
        />
        <textarea
          placeholder="Nihongo"
          value={japanese.join("")}
          className={`${textStyle}`}
          name=""
          id=""
        />
        <textarea
          placeholder="Romaji"
          value={romaji.join("")}
          className={`${textStyle}`}
          name=""
          id=""
        />
      </div>
    </div>
  );
}
