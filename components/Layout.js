import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = (properties) => {
  const pathname = useRouter().pathname;
  return (
    <>
      <Head>
        <title>
          {pathname == "/"
            ? "Home"
            : pathname[1].toUpperCase() +
              pathname.substring(2, pathname.lastIndexOf("/"))}
        </title>
        <meta name="keywords" content="contacts" />
      </Head>
      <div className="content">
        <Navbar />
        {properties.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
