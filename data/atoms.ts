import { atom } from "jotai";

const japaneseAtom = atom<string[]>([]);
const romajiAtom = atom<string[]>([]);

const chosenScriptAtom = atom<string>("Hiragana");
const chosenWritingSystemAtom = atom<string>("nihongo");
export { japaneseAtom, romajiAtom, chosenScriptAtom, chosenWritingSystemAtom };
