import { Outlet } from "react-router-dom";
import MainNavigaton from "./MainNavigation";

export default function RootDefault() {
  return (
    <>
      <MainNavigaton></MainNavigaton>
      <Outlet></Outlet>
    </>
  );
}
