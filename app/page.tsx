import EditingKeys from "@/components/keyboard/EditingKeys";
import Keyboard from "@/components/keyboard/Keyboard";
import Screen from "@/components/screen/Screen";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen ">
      <Screen />
      <div className="bg-slate-200">
        <EditingKeys />
        <Keyboard />
      </div>
      <div className="h-[5%] bg-slate-200"></div>
    </main>
  );
}
