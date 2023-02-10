import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ZpravaPage(props) {
  const { zpravy, isLoaded } = props;

  let { id } = useParams();
  let detailZpravy = zpravy.filter((f) => f.id == id)[0];
  console.log("id", id);
  console.log("zpravy", zpravy, isLoaded);

  // const {content.rendered } = 

  if (isLoaded) {
    return (
      <>
        <Link to="/">Go back</Link>
        <hr />
        <h1>{detailZpravy.title.rendered}</h1>
        <div>{detailZpravy.content.rendered}</div>
      </>
    );
  }
  return <div>Loading...</div>;
}
