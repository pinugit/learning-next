import React from "react";

interface props {
  params: { name: string; id: string };
}

const page = ({ params: { name, id } }: props) => {
  return (
    <div>
      page {id} {name}
    </div>
  );
};

export default page;
