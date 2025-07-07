"use client";
import { useState } from "react";
import Image from "next/image";

const jokes = [
  "Why did the developer go broke? Because he used up all his cache! 😂",
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "Why did the function return early? Because it had a date with an exception! 💔",
  "Why do JavaScript developers wear glasses? Because they don’t C#! 🤓",
  "Why did the computer get cold? It forgot to close its Windows! 🥶",
  "Why was the JavaScript file bigger than the CSS file? Because it was full of 'var's! 📦",
  "Why did the array go to therapy? To get its elements in order! 🛋️",
  "Why did the coder get kicked out of school? Because he kept taking classes! 🏫",
  "Why did the React component feel relieved? It finally unmounted! 😌",
  "Why did the developer quit his job? He didn’t get arrays! 😅",
  "Why did the CSS selector break up with the HTML element? Because it found someone more specific! 💔",
  "Why do Python programmers have low self-esteem? Because they’re constantly comparing their self to others! 🐍",
  "Why did the server go to the gym? To get stronger requests! 💪",
];

export default function Home() {
  const [joke, setJoke] = useState(jokes[0]);

  function tellRandomJoke() {
    let newJoke;
    do {
      newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    } while (newJoke === joke && jokes.length > 1);
    setJoke(newJoke);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="row-start-2 w-full max-w-2xl flex flex-col items-center justify-center gap-8 text-center bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 dark:from-[#222] dark:via-[#333] dark:to-[#222] rounded-3xl shadow-xl p-10 border border-black/10 dark:border-white/10">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          className="mb-2 dark:invert animate-bounce"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 drop-shadow-lg">
          Welcome to the{" "}
          <span className="inline-block rotate-6">😂</span> Funniest Next.js Page!
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          This page is so{" "}
          <span className="font-bold text-pink-500">funny</span>, even your code
          will laugh! <br />
          <span className="inline-block animate-spin text-2xl">🤪</span>
        </p>
        <div className="bg-white/70 dark:bg-black/30 rounded-xl p-6 shadow-inner border border-black/10 dark:border-white/10 min-h-[60px] flex items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-100 transition-all">
          {joke}
        </div>
        <button
          className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 dark:from-yellow-600 dark:via-pink-600 dark:to-blue-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          onClick={tellRandomJoke}
        >
          Tell me a joke!
        </button>
      </section>

    </div>
  );
}
