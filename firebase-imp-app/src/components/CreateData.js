/* eslint-disable no-unused-vars */

import {getDatabase, ref, set} from "firebase/database";
import {app} from "../firebase";

const db = getDatabase(app);

function CreateData() {
  const putData = ()=>{
    set(ref(db,'users/ram'),{
      id:1,
      name:"Ram",
      age:29
    })
  }
  return (
    <div className="App">
      <h1>Firebase react app</h1>
      <button onClick={putData}>Put data</button>
    </div>
  );
}

export default CreateData;
