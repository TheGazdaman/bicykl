import React, { useState, useEffect, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NewApp = () => {
  const [zpravy, setZpravy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/wp-json/wp/v2/zpravy")
      .then((resp) => resp.json())
      .then((data) => {
        setZpravy(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  propTypes = {
    zprava: PropTypes.object.isRequired,
  };
  const { featured_media, author } = this.props.zprava;

  useEffect(() => {
    fetch()
  })

  return (
    <>
      {/* {zpravy.map((item, i) => (
        <p>{item}</p>
      ))} */}
    </>
  );
};

export default NewApp;
