import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

import "../styles/globals.css";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
