import React from "react";

interface props {
  params: { t: string[] };
}

const page = ({ params: { t } }: props) => {
  return <div>page {t}</div>;
};

export default page;
