/* eslint-disable no-unused-vars */

import {getDatabase, ref, set} from "firebase/database";
import {app} from "./firebase";
import './App.css';

const db = getDatabase(app);

function App() {
  return (
    <div className="App">
      Firebase react app
    </div>
  );
}

export default App;
