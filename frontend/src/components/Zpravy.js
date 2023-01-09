import React, { Component } from "react";
import ZpravaItem from "./ZpravaItem";

function Zpravy(props) {
  const { zpravy, isLoaded } = props;

  if (isLoaded) {
    return (
      <div>
        {zpravy.map((zprava) => (
          <ZpravaItem zprava={zprava} key={zprava.id} />
        ))}
      </div>
    );
  }
  return <h3>Loading...</h3>;
}

export default Zpravy;
