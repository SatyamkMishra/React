import { useState } from "react";

export default function BackGroundColor() {
  let [color, setColor] = useState("blue");

  return (
    <div className={`min-h-screen w-full bg-${color}-500 flex flex-col justify-between`}>
      <div className="flex-1 flex items-center justify-center text-white text-2xl font-bold">
        Tap a button to change background!
      </div>

      <div className="py-4 shadow-lg flex flex-wrap justify-center space-x-3 rounded-t-2xl fixed bottom-0 left-8 right-8 bg-black">
      <button onClick={() => setColor("blue")} className="px-5 py-3 rounded-full text-white bg-blue-500 hover:bg-opacity-50 shadow-md transition-all">
          Blue
        </button>
        <button onClick={() => setColor("red")} className="px-5 py-3 rounded-full text-white bg-red-500 hover:bg-opacity-50 shadow-md transition-all">
          Red
        </button>
        <button onClick={() => setColor("green")} className="px-5 py-3 rounded-full text-white bg-green-500 hover:bg-opacity-50 shadow-md transition-all">
          Green
        </button>
        <button onClick={() => setColor("yellow")} className="px-5 py-3 rounded-full text-white bg-yellow-500 hover:bg-opacity-50 shadow-md transition-all">
          Yellow
        </button>
        <button onClick={() => setColor("purple")} className="px-5 py-3 rounded-full text-white bg-purple-500 hover:bg-opacity-50 shadow-md transition-all">
          Purple
        </button>
        <button onClick={() => setColor("pink")} className="px-5 py-3 rounded-full text-white bg-pink-500 hover:bg-opacity-50 shadow-md transition-all">
          Pink
        </button>
        <button onClick={() => setColor("orange")} className="px-5 py-3 rounded-full text-white bg-orange-500 hover:bg-opacity-50 shadow-md transition-all">
          Orange
        </button>
        <button onClick={() => setColor("gray")} className="px-5 py-3 rounded-full text-white bg-gray-500 hover:bg-opacity-50 shadow-md transition-all">
          Gray
        </button>
        <button onClick={() => setColor("teal")} className="px-5 py-3 rounded-full text-white bg-teal-500 hover:bg-opacity-50 shadow-md transition-all">
          Teal
        </button>
        <button onClick={() => setColor("indigo")} className="px-5 py-3 rounded-full text-white bg-indigo-500 hover:bg-opacity-50 shadow-md transition-all">
          Indigo
        </button>
        <button onClick={() => setColor("cyan")} className="px-5 py-3 rounded-full text-white bg-cyan-500 hover:bg-opacity-50 shadow-md transition-all">
          Cyan
        </button>
        <button onClick={() => setColor("lime")} className="px-5 py-3 rounded-full text-white bg-lime-500 hover:bg-opacity-50 shadow-md transition-all">
  Lime
</button>

      </div>
    </div>
  );
}
