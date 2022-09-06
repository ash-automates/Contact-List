import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (properties) => {
  return (
    <div className="content">
      <Navbar />
      {properties.children}
      <Footer />
    </div>
  );
};

export default Layout;
