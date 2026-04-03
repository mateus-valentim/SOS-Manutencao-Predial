"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Navbar from "./components/navbar/navbar";

const Toggle =() => {
  const {theme, setTheme} = useTheme();
  const [mount, setMount ]= useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if(!mount){
    return <div className="border-2 border-black w-32 h-9 rounded-full text-center align-middle">Loading...</div>;
  }

  return (
      <button className="border w-32 h-9 rounded-full text-center align-middle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
  )




}

export default function Home() {
  return (
      <div className="flex flex-1 flex-col items-center justify-center font-sans">
          <Navbar></Navbar>
        <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">

        </main>
      </div>
  );
}