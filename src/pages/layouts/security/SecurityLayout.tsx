import React from "react";
import { Outlet } from "react-router-dom";

const SecurityLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SecurityLayout;
