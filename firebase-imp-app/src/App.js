/* eslint-disable no-unused-vars */

import {getDatabase, ref, set} from "firebase/database";
import {app} from "./firebase";
import './App.css';

const db = getDatabase(app);

function App() {
  const putData = ()=>{
    set(ref(db,'users/navneet'),{
      id:1,
      name:"Navneet",
      age:25
    })
  }
  return (
    <div className="App">
      <h1>Firebase react app</h1>
      <button onClick={putData}>Put data</button>
    </div>
  );
}

export default App;
