import React, { useEffect } from "react";
import { useGlobalcontext } from "../context";
import Me from "./Me";

const Dashboard = () => {
  const { user, amount } = useGlobalcontext();

  if (!user) {
    return <Me />;
  }
  return (
    <section className="dashboard">
      <h3>hello, {user}</h3>
      <p>You have {amount} items in your cart, procced to checkout?</p>
    </section>
  );
};

export default Dashboard;
