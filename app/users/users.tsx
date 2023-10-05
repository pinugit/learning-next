import Link from "next/link";
import { sort } from "fast-sort";
import { props, userDataType } from "./page";

export const users = async ({ searchParams: { sortOrder } }: props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData: userDataType[] = await res.json();

  const sortedUserData = sort(userData).asc(
    sortOrder == "email" ? (u) => u.email : (u) => u.name
  );

  return (
    <>
      <h1>users</h1>
      <suspense>
        <table className="table-s table-zebra-zebra">
          <thead>
            <tr>
              <th>
                <Link href={"/users?sortOrder=name"}>Name</Link>
              </th>
              <th>
                <Link href={"/users?sortOrder=email"}>Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUserData.map((theUser) => (
              <tr>
                <td>{theUser.name}</td>
                <td>{theUser.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </suspense>
    </>
  );
};
