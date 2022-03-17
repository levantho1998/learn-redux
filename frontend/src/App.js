import { useState } from "react";
import "./App.css";
import Hearder from "./Components/Header/Hearder";
import EditPage from "./Components/Edit/EditPage";

function App() {
  const [edit, setEdit] = useState(false);
  return (
    <div className="App">
      {edit === true ? (
        <EditPage setEdit={setEdit} />
      ) : (
        <Hearder setEdit={setEdit} />
      )}
    </div>
  );
}

export default App;
