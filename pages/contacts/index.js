import styles from "../../styles/Contacts.module.css";

export const getStaticProps = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      contacts: data,
    },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <div className="container">
      <h1>All Contacts</h1>
      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <a className={styles.single}>
              <h3>{contact.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
