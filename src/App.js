import logo from './logo.svg';
import './App.css';
import { db } from "./firebase"
import { collection, getDocs, addDoc, deleteDoc, getDoc, doc } from "firebase/firestore"


// const getData = async () => {
// const snapshot = await getDocs(collection(db, "users"));
// console.log(snapshot.docs.map(doc => doc.data()));
// }

// const onSave = async (values) => {
// await addDoc(collection(db, "tasks"), values);
// }

const delDoc = async () => {
  // try {
  // await db.collection("users").doc(doc).delete()
  // 
  // } catch (error) {
  // console.error(error);
  // }

  await deleteDoc(doc(db, "tasks", "yIuqtEB5beUMSzg5S5Jw"))

}

function App() {
  // getData();
  // 
  // const tarea1 = {
  // description: "regar el pasto",
  // }

  //onSave(tarea1)
  delDoc("user002")

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para ver los cambios.
        </p>
      </header>
    </div >
  );
}

export default App;
