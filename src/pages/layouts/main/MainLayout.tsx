import secure from "hocs/secure";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default secure(MainLayout);
