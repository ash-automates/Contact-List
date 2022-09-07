import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo-standard.png"
          alt="site logo"
          width={150}
          height={45}
        />
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
