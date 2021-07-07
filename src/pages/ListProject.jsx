import React, { Component } from "react";
import { Container, Button, FormControl, InputGroup } from "react-bootstrap";
import { FcPositiveDynamic, FcLandscape, FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

class ListProject extends Component {
  state = {
    searchString: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  render() {
    let projects = [];
    if (this.state.searchString === "") {
      projects = this.props.projects;
    } else {
      projects = this.props.projects.filter(
        (project) =>
          project.name
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())
      );
    }
    const imgs = this.props.local.rightSideImg;
    const viewProjects = projects.map((project) => {
      return (
        <div className="card" key={project._id}>
          <img src={project.mainImg} alt={project.name} />
          <div className="card-body">
            <Link to={"/project/" + project._id}>
              <h5>{project.name}</h5>
            </Link>
            <span>
              <FcPositiveDynamic /> <b>Giá : {project.price} triệu VNĐ</b> --
              Ngày ra mắt : {project.date}
            </span>
            <br />
            <span>
              <FcLandscape /> Diện tích : {project.area} m2 -- Địa chỉ :{" "}
              {project.address}
            </span>
            <p className="des-content">{project.descriptions}</p>
            <br />
            <Button className="outline-info" variant="warning">
              <Link to={"/project/" + project._id}>Chi tiết</Link>
            </Button>{" "}
            <Button className="outline-info" variant="danger">
              <a
                href={"tel:" + this.props.local.phonenumber1}
                style={{ color: "white" }}
              >
                Gọi ngay
              </a>
            </Button>
          </div>
        </div>
      );
    });
    const viewImgs = imgs.map((img) => {
      return <img src={img} className="img-view-right" alt="" />;
    });
    return (
      <Container className="list-project-page">
        <h2>DANH SÁCH CÁC DỰ ÁN BẤT ĐỘNG SẢN</h2>

        <InputGroup className="search-input">
          <FormControl
            name="searchString"
            placeholder="Tìm kiếm dự án"
            value={this.state.searchString}
            onChange={this.handleChange}
          />
          <Button variant="info">
            <FcSearch style={{ fontSize: "20pt" }} />
          </Button>
        </InputGroup>

        <div className="d-flex justify-content-between">
          <div className="col-9 list-project">{viewProjects}</div>
          <div className="col-3 list-img">{viewImgs}</div>
        </div>
      </Container>
    );
  }
}

export default ListProject;
