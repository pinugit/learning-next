"use client";

import { useState } from "react";

const getRandomDogs = async () => {
  const dataReq = await fetch("https://dog.ceo/api/breeds/image/random");
  return await dataReq.json();
};
const Button = () => {
  const [data, setData] = useState(getRandomDogs());

  const handleButtonClick = async () => {
    setData(await getRandomDogs());
  };

  return (
    <>
      <img src={data.message} alt="" />
      <button onClick={handleButtonClick}> click to refresh</button>
    </>
  );
};

export default Button;
