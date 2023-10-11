"use client";
import React from "react";
import JapaneseScript from "./JapaneseScript";
import { hiragana, katakana } from "@/data/japanese-scripts.json";
import { chosenScriptAtom } from "@/data/atoms";
import { useAtom } from "jotai";

export default function Keyboard() {
  const [chosenScript] = useAtom(chosenScriptAtom);
  return (
    <div id="keyboard" className="h-[45%] bg-slate-200 overflow-y-auto">
      <div className="">
        {chosenScript === "Hiragana" ? (
          <JapaneseScript
            script={hiragana.characters}
            romaji={hiragana.romaji}
          />
        ) : (
          <JapaneseScript
            script={katakana.characters}
            romaji={katakana.romaji}
          />
        )}
      </div>
    </div>
  );
}
