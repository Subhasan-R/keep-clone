import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid">
      <div
        style={{
          gridColumn: "1fr",
        }}
      >
        <NavBar />
      </div>
      <div className="flex px-4 py-3">
        <div className="w-48">
          <SideBar />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
