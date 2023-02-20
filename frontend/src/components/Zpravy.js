import React from "react";
import ZpravaItem from "./ZpravaItem";

function Zpravy(props) {
  const { zpravy, isLoaded } = props;

  if (isLoaded) {
    return (
      <div className="zpravy-box">
        {zpravy.map((zprava, index) => (
          <ZpravaItem zprava={zprava} id={zprava.id} isLoaded={isLoaded} i={index} />
        ))}
      </div>
    );
  }
  return <h3>Loading...</h3>;
}

export default Zpravy;
