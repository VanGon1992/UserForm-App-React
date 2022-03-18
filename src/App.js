import './App.css';
import React, {useState} from 'react'
import Formulario from './components/Formulario/Formulario';
import Profile from './components/Profile/Profile';

function App() {

  const [profiles, setProfiles] = useState ([])

  const addProfile = (profile) =>{
    setProfiles([...profiles, profile])
  }

  return (
    <div className="App">

    <h1>Listado de Usuarios</h1>
   
      <Formulario addProfile={addProfile}/>
      <Profile profiles={profiles}/>

    </div>
  )
}

export default App;
