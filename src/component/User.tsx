import React from "react";

export const User: React.FC = ({ user }: any) => {
  return (
    <tr className="border-b last-of-type:border-0">
      <td className="p-2 px-4">
        <div>
          <p className="text-sm font-medium text-gray-700">{user.username}</p>
          <p className="text-xs text-gray-400">{user.name}</p>
        </div>
      </td>
      <td className="p-2 px-4 text-sm font-medium text-gray-700">
        {user.email}
      </td>
      <td className="p-2 px-4 text-sm font-medium text-gray-700">
        {user.phone}
      </td>
      <td className="p-2 px-4 text-sm font-medium text-gray-700">
        {user.website}
      </td>
    </tr>
  );
};
