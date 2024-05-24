import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../components";
function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
