import React, {useState} from "react";

function ToyForm({onNewToy}) {
  const [formData, setFomData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(e){
    setFomData({...formData, [e.target.name]:e.target.value})
  }
  console.log(formData);
  function handleSubmit(e){
    e.preventDefault()
    const action = async()=>{
      const data = await fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)

      })
      const resp=  data.json()
      onNewToy(resp)
    }
    action()
    // fetch('http://localhost:3001/toys', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value= {formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value= {formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
