"use client";
import React, { useState, useEffect } from "react";
import Card from "@/Components/Card";

const Page = () => {
  const [char, setChars] = useState([]);
  const [search, setSearch] = useState("");
  const [url, seturl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=93883aeed78f362e686d90e6b9cf3b37&hash=524b07ebe9e94a0560cedb54acb3f1df"
  );
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setChars(data.data.results || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const searchMarvel = () => {
    seturl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=93883aeed78f362e686d90e6b9cf3b37&hash=524b07ebe9e94a0560cedb54acb3f1df`
    );
  };

  useEffect(() => {
    fetchdata();
  }, [url]);

  return (
    <div className=" bg-gradient-to-r from-[#eea2a2] via-[#bbc1bf] via-[#57c6e1] via-[#b49fda] to-[#7ac5d8] flex flex-col items-center justify-center">
      <p className="text mx-auto font-bold text-6xl py-7 m-3">
        Marvel Characters
      </p>
      <input
        className="w-[300px] px-4 py-2 outline-none rounded-xl"
        placeholder="Search here"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchMarvel();
          }
        }}
      />

      {/* {error && <p>Error: {error}</p>} */}

      <div className="flex flex-wrap gap-5 py-5 items-center justify-center">
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

export default Page;
