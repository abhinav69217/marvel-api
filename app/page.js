"use client";
import React, { useState, useEffect } from "react";
import Card from "@/Components/Card";
import Link from "next/link";

const page = () => {
  const [char, setChars] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=93883aeed78f362e686d90e6b9cf3b37&hash=524b07ebe9e94a0560cedb54acb3f1df"
    );
    const data = await response.json();
    setChars(data.data.results);
    console.log(data.data.results);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=" bg-gradient-to-r from-[#eea2a2] via-[#bbc1bf] via-[#57c6e1] via-[#b49fda] to-[#7ac5d8]">
      <p className="text mx-auto font-bold text-6xl py-7 ">Marvel Characters</p>

      <div className="flex flex-wrap gap-5 p-5 px-0 items-center justify-center">
        {char.map((c) => {
          return (
            <a href={`/${c.id}`} key={c.id}>
              <Card
                key={c.id}
                name={c.name}
                path={c?.thumbnail?.path}
                extension={c?.thumbnail?.extension}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default page;
