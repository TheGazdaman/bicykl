import React from "react";
import ZpravaItem from "./ZpravaItem";

function Zpravy(props) {
  const { zpravy, isLoaded } = props;
  console.log("bla", zpravy)

  if (isLoaded) {
    return (
      <div className="zpravy-box">
        {zpravy.map((zprava, i) => (
          <ZpravaItem zprava={zprava} id={zprava.id} isLoaded={isLoaded} />
        ))}
      </div>
    );
  }
  return <h3>Loading...</h3>;
}

export default Zpravy;
