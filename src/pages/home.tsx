import React from "react";
import { User } from "../component/User";
import { useGetAllUsersQuery } from "../redux/api/apiSlice";

const Home: React.FC = () => {
  const { data: users, error, isLoading } = useGetAllUsersQuery();
  //   console.log(users);
  if (isLoading) return <div>Loading....</div>;
  return (
    <div className="p-5 font-inter">
      <div className="border rounded-md overflow-hidden">
        <div className="p-3">
          <h1 className="text-xl font-semibold text-gray-700">All Users</h1>
        </div>
        {/* table */}
        <table className="table-auto w-full">
          <thead className="bg-slate-100 border-t border-b">
            <tr className="">
              <th className="text-start font-medium p-2 px-4 text-gray-800">
                Name
              </th>
              <th className="text-start font-medium p-2 px-4 text-gray-800">
                Email
              </th>
              <th className="text-start font-medium p-2 px-4 text-gray-800">
                Phone
              </th>
              <th className="text-start font-medium p-2 px-4 text-gray-800">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user: any) => <User key={user.id} {...{ user }} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
