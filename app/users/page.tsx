interface userDataType {
  name: string;
  email: string;
}
const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData: userDataType[] = await res.json();

  return (
    <>
      <h1>users</h1>
      <table className="table-s table-zebra-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((theUser) => (
            <tr>
              <td>{theUser.name}</td>
              <td>{theUser.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default users;
