import React, { useState } from "react";
import useDisclosure from "../../hooks/usedisclosure";
import Send from "./../Send";
import Userinfo from "./Userinfo";

const Users = ({ users,token }) => {
  return (
    <div>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div className=" overflow-auto h-96 ">
        {users.map((user) => (
          <Userinfo
          token={token}
            id={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
