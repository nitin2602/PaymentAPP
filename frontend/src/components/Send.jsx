import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Send = ({ isopen, onopen, onclose, names, id, token }) => {
  const [name, setname] = useState(names);
  const [value, setvalue] = useState();
  console.log(value);

  const transfer = async () => {
    console.log("chl rha");
    console.log(token);

    const config = {
      headers: {
        Authorization: token, // Include the token as a Bearer token
      },
    };
    axios
      .post(
        "http://localhost:3000/api/v1/accounts/transfer",
        {
          amount: value,
          to: id,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        toast.success(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Something failed!!")
      });
  };

  return (
    <div>
      {isopen ? (
        <div className=" h-full flex flex-col justify-center ">
          <div className=" absolute left-1/3  top-1/4  bottom-1/2 border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div>
              <button
                onClick={onclose}
                className=" underline right-0 relative "
              >
                Close
              </button>
            </div>

            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">{name[0]}</span>
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="amount"
                  >
                    Amount (in Rs)
                  </label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="amount"
                    placeholder="Enter amount"
                    onChange={(e) => setvalue(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => transfer()}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                >
                  Initiate Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Send;
