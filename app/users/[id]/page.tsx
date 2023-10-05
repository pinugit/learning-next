import React from "react";
import { notFound } from "next/navigation";

interface props {
  params: { id: number };
}

const page = ({ params: { id } }: props) => {
  if (id > 10) notFound();

  return <div>page {id}</div>;
};

export default page;
