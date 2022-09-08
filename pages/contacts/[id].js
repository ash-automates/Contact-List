export const getStaticPaths = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async function (context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: { user },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.suite + ", " + user.address.street}</p>
    </div>
  );
};

export default Details;
