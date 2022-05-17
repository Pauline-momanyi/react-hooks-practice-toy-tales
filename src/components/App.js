import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    setToys([...toys, newToy])
  }

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setToys(data)
    })
  },[])


  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
