import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const history = useRouter();
  useEffect(
    () => {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    },
    /* eslint-disable */
    []
    /* eslint-enable */
  );
  return (
    <div className="not-found">
      <h1>Oops</h1>
      <h2>Page cannot be found!</h2>
      <p>
        You&apos;ll be redirected to the{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>{" "}
        in 3 seconds...
      </p>
    </div>
  );
};

export default NotFound;
