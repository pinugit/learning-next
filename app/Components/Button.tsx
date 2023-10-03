"use client";

import { error } from "console";
import { useEffect, useState } from "react";

interface dogData {
  message: string;
  status: string;
}

const getRandomDogs = async () => {
  try {
    const dataReq = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await dataReq.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const Button = () => {
  const [data, setData] = useState<dogData | null>(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setData(await getRandomDogs());
    setError(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {data ? (
        <img style={{ width: "300px" }} src={data?.message} alt="" />
      ) : (
        <div>loading..</div>
      )}
      <button className="btn btn-primary" onClick={fetchData}>
        click to refresh
      </button>
    </>
  );
};

export default Button;
