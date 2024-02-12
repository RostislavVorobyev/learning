import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import cssClasses from "./Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={cssClasses.content}>
        <Outlet />
      </main>
    </>
  );
}
