"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";


export default function Home() {
  return (
      <div className="flex flex-1 flex-col items-center justify-center font-sans">
          <Navbar></Navbar>
        <main className="flex w-full w-full flex-1 flex-col">
            <Slider></Slider>
        </main>
      </div>
  );
}