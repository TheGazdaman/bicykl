import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

export default class ZpravaItem extends Component {
  state = {
    imgUrl: "",
    author: "",
    isLoaded: false,
  };
  static propTypes = {
    zprava: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { featured_media, author } = this.props.zprava;
    const getImageUrl = axios.get(
      `http://localhost:8000/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `http://localhost:8000/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      console.log("gutenTag", res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.author,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id, title, excerpt } = this.props.zprava;
    const { author, imgUrl, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <Link to={`/zpravy/${id}`}>
            <h2 style={{ marginBottom: "0" }}>{title.rendered}</h2>
            </Link>
            <small>
              Review by <strong>{author}</strong>
            </small>
            <img style={{ width: "50%" }} src={imgUrl} alt={title.rendered} />
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
         
          <hr />
        </>
      );
    }

    return null;
  }
}
