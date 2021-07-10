import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "../axios";

class Change extends Component {
  state = {
    mainImg: "",
    introImg: "",
    date: "",
    name: "",
    price: "",
    maps: "",
    video: "",
    area: "",
    address: "",
    body: "",
    priority: "",
  };

  UNSAFE_componentWillMount() {
    const project = this.props.project;
    console.log(project);
    if (project) {
      this.setState({
        name: project.name,
        mainImg: project.mainImg,
        date: project.date,
        price: project.price,
        maps: project.maps,
        video: project.video,
        area: project.area,
        address: project.address,
        introImg: project.introImg,
        body: project.body,
        priority: project.priority,
      });
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.props.project)
      await axios.post(`/api/project/update`, {
        id: this.props.project._id,
        name: this.state.name,
        mainImg: this.state.mainImg,
        date: this.state.date,
        price: this.state.price,
        maps: this.state.maps,
        video: this.state.video,
        area: this.state.area,
        address: this.state.address,
        introImg: this.state.introImg,
        body: this.state.body,
        priority: this.state.priority,
      });
    else {
      await axios.post(`/api/project/add`, {
        name: this.state.name,
        mainImg: this.state.mainImg,
        date: this.state.date,
        price: this.state.price,
        maps: this.state.maps,
        video: this.state.video,
        area: this.state.area,
        address: this.state.address,
        introImg: this.state.introImg,
        body: this.state.body,
        priority: this.state.priority,
      });
    }
    this.props.onCance();
  };

  render() {
    return (
      <div className="opa-project">
        <Form className="add-project" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Tên dự án</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hình ảnh chính</Form.Label>
            <Form.Control
              type="text"
              name="mainImg"
              value={this.state.mainImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày mở bán</Form.Label>
            <Form.Control
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Giá bán</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link google maps</Form.Label>
            <Form.Control
              type="text"
              name="maps"
              value={this.state.maps}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link video demo</Form.Label>
            <Form.Control
              type="text"
              name="video"
              value={this.state.video}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Diện tích khu đất</Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={this.state.area}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link ảnh ở slide giới thiệu</Form.Label>
            <Form.Control
              type="text"
              style={{ height: "150px" }}
              as="textarea"
              placeholder="Mỗi link ảnh nằm ở các dòng riêng"
              name="introImg"
              value={this.state.introImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nội dung dự án</Form.Label>
            <Form.Control
              style={{ height: "500px" }}
              type="text"
              as="textarea"
              placeholder="h2:Tên tiêu đề chính
<id riêng>
h3:<Tên tiêu đề nhỏ>
link:<link ảnh>
body:<nội dung>
=====<sử dụng 5 dấu = để ngăn cách các nội dung chính>
h2:Tên tiêu đề chính
h3:<Tên tiêu đề nhỏ>
link:<link ảnh>
body:<nội dung>
......
              "
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Độ ưu tiên xuất hiện của dự án</Form.Label>
            <Form.Control
              type="number"
              name="priority"
              value={this.state.priority}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button variant="danger" onClick={this.props.onCance}>
            Hủy
          </Button>
          <Button type="submit">Lưu</Button>
        </Form>
      </div>
    );
  }
}

export default Change;
