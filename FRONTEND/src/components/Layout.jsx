// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";

// function Layout() {
//   const location = useLocation();

//   const hideNavbar =
//     location.pathname === "/login" ||
//     location.pathname === "/signup";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Outlet />
//     </>
//   );
// }

// export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Outlet />

      {!hideNavbar && <Footer />}
    </>
  );
}

export default Layout;