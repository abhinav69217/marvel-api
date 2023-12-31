"use client";
import React, { useEffect, useState } from "react";
import bg from "../../public/marvel.jpg";

const page = ({ params }) => {
  const { id } = params;
  const [item, setItem] = useState();

  const fetchInfo = async () => {
    const response =
      await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=93883aeed78f362e686d90e6b9cf3b37&hash=524b07ebe9e94a0560cedb54acb3f1df
    `);

    const data = await response.json();
    setItem(data.data.results[0]);
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div
          className="flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="w-full flex justify-center">
            <img
              className="rounded-lg h-[300px]"
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />
          </div>
          <div className="text-center w-4/6 mt-3	">
            <h1 className="text-3xl font-bold underline">{item.name}</h1>
            <h5 className="mt-3">{item.description}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
