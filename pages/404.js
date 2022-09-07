import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops</h1>
      <h2>Page cannot be found!</h2>
      <p>
        Go back{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
