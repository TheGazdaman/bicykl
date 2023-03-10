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
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.author,
        isLoaded: true,
      });
      console.log("heyhou", author);
    });
  }

  render() {
    const { id, title, excerpt, i } = this.props.zprava;
    const { author, imgUrl, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/zpravy/${id}`}
        >
          <div className="zprava-item">
            <div className="image-box">
              <img
                className={i === 0 ? "zpravaPageImg" : "zprava-image"}
                src={imgUrl}
                alt={title.rendered}
              />
              <small>
                Review by <strong>{author}</strong>
              </small>
            </div>
            <div className="zprava-box">
              <div className="zprava-link">{title.rendered}</div>

              <div
                className="zprava-text"
                dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
              />
            </div>
          </div>
          <hr />
        </Link>
      );
    }

    return null;
  }
}
