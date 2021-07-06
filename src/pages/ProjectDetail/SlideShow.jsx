import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FcFilmReel, FcGallery, FcLandscape } from "react-icons/fc";

class slideShow extends Component {
  state = {
    index: 0,
    at: "img",
  };

  handleClickChange = (index) => {
    this.setState({ index: index });
  };

  handleClickAt = (str) => {
    this.setState({ at: str });
  };

  render() {
    const imgs = this.props.imgs;
    const listImg = imgs.map((img, index) => {
      return (
        <img
          src={img}
          className={this.state.index === index ? "" : " opacity-5"}
          key={index}
          onClick={() => this.handleClickChange(index)}
          alt=""
        />
      );
    });
    let view;
    if (this.state.at === "img")
      view = (
        <>
          <img src={imgs[this.state.index]} className="main-img-slide" alt="" />
          <div className="item-slide-show">{listImg}</div>
        </>
      );
    else if (this.state.at === "map")
      view = (
        <iframe
          title="ggmaps"
          className="ggmaps"
          src={this.props.maps}
        ></iframe>
      );
    else
      view = (
        <iframe
          title="videos"
          className="ggmaps"
          src={this.props.video}
        ></iframe>
      );
    return (
      <Container className="silde-project-detail">
        <div className="gourp-button-slide">
          <button onClick={() => this.handleClickAt("img")}>
            <FcGallery />
          </button>
          <button onClick={() => this.handleClickAt("map")}>
            <FcLandscape />
          </button>
          <button onClick={() => this.handleClickAt("video")}>
            <FcFilmReel />
          </button>
        </div>
        {view}
      </Container>
    );
  }
}

export default slideShow;
