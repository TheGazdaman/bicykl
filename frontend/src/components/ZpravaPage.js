import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ZpravaPage(props) {
  const { zpravy, isLoaded } = props;

  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();
  let detailZpravy = zpravy.filter((f) => f.id == id)[0];

  let featuredMedia;
  const getFeaturedMedia = () => {
    zpravy.map((zprava) => {
      if (zprava.id == id) {
        featuredMedia = zprava.featured_media;
      } else {
        console.log("bye");
      }
    });
  };

  let author;
  const getAuthor = () => {
    zpravy.map((zprava) => {
      if (zprava.id == id) {
        author = zprava.author;
      } else {
        console.log("Not using author");
      }
    });
  };

  getFeaturedMedia(id);
  getAuthor(id);

  useEffect(() => {
    fetch(`http://localhost:8000/wp-json/wp/v2/media/${featuredMedia}`)
      .then((resp) => resp.json())
      .then((data) => {
        setImageUrl(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [ featuredMedia, isLoading ]);

  if (isLoaded) {
    return (
      <>
        <hr />
        <div className="zprava-body">
          <Link to="/">Go back</Link>
          <div className="zprava-header">{detailZpravy.title.rendered}</div>
          <img
            className="zpravaPageImg"
            src={imageUrl.source_url}
            alt={imageUrl.rendered}
          />
          <div
            dangerouslySetInnerHTML={{ __html: detailZpravy.content.rendered }}
          ></div>
        </div>
      </>
    );
  }
  return <div>Loading...</div>;
}
