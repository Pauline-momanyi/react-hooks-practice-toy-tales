import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    <div id="toy-collection">
      {toys.map(toy=>(
        <ToyCard toy={toy} key={toy.name}/>
      ))}
    </div>
  );
}

export default ToyContainer;
