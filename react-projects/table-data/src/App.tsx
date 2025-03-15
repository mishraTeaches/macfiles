import { useState } from "react";
import AddForm from "./components/AddForm";
import Lists from "./components/lists";

function App() {
  const [people, setPeople] = useState<any[]>([]);

  const addPerson = (userName: string, email: string) => {
    setPeople((prevPeople) => [...prevPeople, { user: userName, email }]);
  };

  return (
    <>
      <section className="flex">
        <aside className="flex-1">
          <AddForm addPerson={addPerson} />
        </aside>
        <aside className="flex-1">
          <Lists people={people} />
        </aside>
      </section>
    </>
  );
}

export default App;
