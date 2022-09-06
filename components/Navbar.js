import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>List of Contacts</h2>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about/">
        <a>About</a>
      </Link>
      <Link href="/contacts/">
        <a>Contacts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
