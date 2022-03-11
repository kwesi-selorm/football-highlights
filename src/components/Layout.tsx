import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
