"use client";

import React from "react";
import { useAtom } from "jotai";
import {
  japaneseAtom,
  romajiAtom,
  chosenScriptAtom,
  chosenWritingSystemAtom,
} from "@/data/atoms";

type JapaneseScriptType = {
  script: string[];
  romaji: string[];
};

export default function JapaneseScript({ script, romaji }: JapaneseScriptType) {
  const [japaneseText, setJapaneseText] = useAtom(japaneseAtom);
  const [romajiText, setRomajiText] = useAtom(romajiAtom);
  const [writingSystem, setWritingSystem] = useAtom(chosenWritingSystemAtom);

  let keys = script.map((character, index) => {
    return (
      <button
        onClick={() => {
          setJapaneseText((prev) => [...prev, character]);
          setRomajiText((prev) => [...prev, romaji[index]]);
        }}
        key={index}
        className="bg-white shadow-md h-[2.5rem] w-[3rem] rounded-md text-xl font-semibold active:bg-slate-200"
      >
        {writingSystem === "nihongo" ? character : romaji[index]}
      </button>
    );
  });
  return (
    <div className="text-black flex justify-center items-center flex-wrap gap-2 max-w-[600px] mx-auto px-4">
      {keys}
    </div>
  );
}
