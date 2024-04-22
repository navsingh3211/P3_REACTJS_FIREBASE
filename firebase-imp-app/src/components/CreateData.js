/* eslint-disable no-unused-vars */
import {useFirebase} from '../context/Firebase';

function CreateData() {
  const firebase = useFirebase();

  const createData = ()=>{
    firebase.putData('users/shyam',{
      id:1,
      name:"ponada",
      age:32
    });
  }
  return (
    <div className="App">
      <h1>Firebase react app</h1>
      <button onClick={createData}>Put data</button>
    </div>
  );
}

export default CreateData;
