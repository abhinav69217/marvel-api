import React from "react";

const Card = (props) => {
  return (
    <div className=" flex flex-col items-center justify-center w-60 h-72 p-5 border-2 border-black rounded-lg">
      <p className="my-1 text-base font-bold">{props.name}</p>
      <img
        className="h-[200px] w-[200px] rounded-lg"
        src={`${props.path}.${props.extension}`}
        alt="g"
      />
    </div>
  );
};

export default Card;
