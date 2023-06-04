import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayuot = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayuot;
