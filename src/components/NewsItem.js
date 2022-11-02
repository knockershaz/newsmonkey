import React from "react";

const NewsItem=(props)=>{
    let { title, description, imageUrl, url, author, date, source } =props;
    return (
      <div>
        <div className="card my-3">
          <div style={{ display: "flex",justifyContent:'flex-end', position: "absolute", right: "0" }}>
            <span
              className="badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-breaking-news-background-world-global-tv-news-banner-design.jpg?fj=1"
                : imageUrl
            }
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
          I
        </div>
      </div>
    );
  }

export default NewsItem;
