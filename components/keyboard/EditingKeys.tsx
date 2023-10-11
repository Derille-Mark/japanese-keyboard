"use client";

import React from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useAtom } from "jotai";
import {
  chosenScriptAtom,
  japaneseAtom,
  romajiAtom,
  chosenWritingSystemAtom,
} from "@/data/atoms";
export default function EditingKeys() {
  const [chosenScript, setChosenScript] = useAtom(chosenScriptAtom);
  const [japanese, setJapanese] = useAtom(japaneseAtom);
  const [romaji, setRomaji] = useAtom(romajiAtom);
  const [writingSystem, setWritingSystem] = useAtom(chosenWritingSystemAtom);
  function handleBackspace() {
    if (japanese.length === 0) return;
    setJapanese((val) => val.slice(0, val.length - 1));
    setRomaji((val) => val.slice(0, val.length - 1));
  }
  return (
    <div className="flex py-2 bg-slate-200 px-8 max-w-[600px] mx-auto">
      <button
        onClick={() => {
          if (chosenScript === "Hiragana") {
            setChosenScript("Katakana");
          } else {
            setChosenScript("Hiragana");
          }
        }}
        className="flex gap-1 items-center shadow-md rounded-sm bg-sky-300 px-2"
      >
        <HiSwitchHorizontal className="text-blue-600" />
        {chosenScript === "Hiragana" ? "Katakana" : "Hiragana"}
      </button>

      <button
        onClick={() =>
          writingSystem === "nihongo"
            ? setWritingSystem("romaji")
            : setWritingSystem("nihongo")
        }
        className="flex gap-1 items-center shadow-md rounded-sm bg-sky-300 mr-auto ml-4 px-2"
      >
        <HiSwitchHorizontal className="text-blue-600" />
        {writingSystem === "nihongo" ? "romaji" : "nihongo"}
      </button>

      <button onClick={handleBackspace} className="flex gap-1 items-center">
        <MdOutlineKeyboardBackspace className="w-5 h-5" />
        Backspace
      </button>
    </div>
  );
}
