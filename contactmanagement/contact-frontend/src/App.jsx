import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {

  return (
      <div>

        <h1>Contact Management System</h1>

        <AddContact />

        <hr />

        <ContactList />

      </div>
  );

}

export default App;