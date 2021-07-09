import React, { Component } from "react";
import {
  Container,
  Button,
  FormControl,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import { FcPositiveDynamic, FcLandscape, FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { sortByPri, configDataNewline } from "../untils/functions";

class ListProject extends Component {
  state = {
    searchString: "",
    page: 0,
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
    const size = this.props.projects.length;
    if (this.state.searchString === "") {
      projects = this.props.projects;
    } else {
      projects = this.props.projects.filter((project) =>
        project.name
          .toLowerCase()
          .includes(this.state.searchString.toLowerCase())
      );
    }
    projects = projects.sort(sortByPri);

    let end = size < this.state.page * 5 + 5 ? size : this.state.page * 5 + 5;
    projects = projects.slice(this.state.page * 5, end);

    const pagina = [];
    for (let number = 0; number < size / 5; number++) {
      pagina.push(
        <Pagination.Item
          key={number}
          active={number === this.state.page}
          onClick={() => this.setState({ page: number })}
        >
          {number + 1}
        </Pagination.Item>
      );
    }
    const viewProjects = projects.map((project) => {
      console.log(project);
      return (
        <div className="card" key={project._id}>
          <img src={project.mainImg} alt={project.name} />
          <div className="card-body">
            <Link to={"/project/" + project.name}>
              <h5>{project.name}</h5>
            </Link>
            <span>
              <FcPositiveDynamic /> <b>Giá : {project.price} VNĐ</b> -- Ngày ra
              mắt : {project.date}
            </span>
            <br />
            <span>
              <FcLandscape /> Diện tích : {project.area} m <sup>2</sup> -- Địa
            </span>
            <p className="des-content">
              {configDataNewline(project.body)[2].substring(5)}
            </p>
            <br />
            <Button className="outline-info" variant="warning">
              <Link to={"/project/" + project.name}>Chi tiết</Link>
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
    const imgs = this.props.local.rightSideImg;
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

        <Pagination className="pagination">
          <Pagination.Prev
            onClick={() =>
              this.setState({
                page: this.state.page - 1,
              })
            }
            disabled={this.state.page === 0}
          />
          {pagina}
          <Pagination.Next
            disabled={this.state.page === Math.floor(size / 5)}
            onClick={() => this.setState({ page: this.state.page + 1 })}
          />
        </Pagination>

        <div className="d-flex justify-content-between">
          <div className="col-9 list-project">{viewProjects}</div>
          <div className="col-3 list-img">{viewImgs}</div>
        </div>

        <Pagination className="pagination">
          <Pagination.Prev
            onClick={() =>
              this.setState({
                page: this.state.page - 1,
              })
            }
            disabled={this.state.page === 0}
          />
          {pagina}
          <Pagination.Next
            disabled={this.state.page === Math.floor(size / 5)}
            onClick={() => this.setState({ page: this.state.page + 1 })}
          />
        </Pagination>
      </Container>
    );
  }
}

export default ListProject;
