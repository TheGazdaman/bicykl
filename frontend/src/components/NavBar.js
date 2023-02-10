import React from "react";
import mainLogo from "./../img/bicyklista.jpeg";

export function NavBar(props) {
  const { isLoaded } = props;
  if (isLoaded) {
    return (
      <div className="nav-bar">
        <img className="logo" src={mainLogo} alt="Bicyklista" />
        <div className="nav-comp">
          <div className="nav-part">Road</div>
          <div className="nav-part">MTB</div>
          <div className="nav-part">Cyklokros</div>
          <div className="nav-part">Dráha</div>
          <div className="nav-part">Tipy na cestu</div>
          <div className="nav-separator nav-part">|</div>
          <div className="nav-part">Kontakt & služby</div>
        </div>
      </div>
    );
  }
  return null;
}
