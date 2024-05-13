import React from "react";
import Send from "../Send";
import useDisclosure from "../../hooks/usedisclosure";

const Userinfo = ({ id, firstName, lastName,token }) => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <div key={id} className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {firstName} {lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <button
          onClick={open}
          className=" inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Send Money
        </button>
        <Send id={id} token={token} isopen={isOpen} onclose={close} names={firstName} />
      </div>
    </div>
  );
};

export default Userinfo;
