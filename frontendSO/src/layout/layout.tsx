import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ paddingTop: "0", paddingBottom: "0", overflowY: "auto", flex: 1 }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
