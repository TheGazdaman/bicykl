import React from "react";
import { Link } from "react-router-dom";

export default function ZpravaPage(props) {
  const { zpravy, isLoaded } = props;
 console.log("zpravy", zpravy[0], isLoaded)

  if (isLoaded) {
    <>
      <Link to="/home">Go back</Link>
      <hr />
      {/* <h1>{zpravy.author}</h1>
      <div dangerouslySetInnerHTML={{ __html: zpravy.content.rendered }}></div> */}
    </>;
  }
  return <div>Loadinguju...</div>;
}
