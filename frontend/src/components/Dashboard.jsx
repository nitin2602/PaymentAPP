import React, { useEffect, useState } from "react";
import Navbar from "./DashboardComponents/Navbar";
import Balance from "./DashboardComponents/Balance";
import Users from "./DashboardComponents/Users";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [balance, setbalance] = useState();
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/accounts/balance", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setbalance(res.data.balance);
      });
    axios
      .get("http://localhost:3000/api/v1/user/bulk", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setusers(res.data.user);
      });
  }, [balance]);

  return (
    <div className=" m-20">
      <Navbar />
      <Balance value={balance} />
      <Users token={token} users={users} />
    </div>
  );
};

export default Dashboard;
