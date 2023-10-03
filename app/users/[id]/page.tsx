interface props {
  params: { id: number };
}

const page = ({ params: { id } }: props) => {
  return <div>New User number {id}</div>;
};

export default page;
