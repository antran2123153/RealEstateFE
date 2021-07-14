import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
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
    description: "",
    body: [],
    priority: 0,
  };

  UNSAFE_componentWillMount() {
    const project = this.props.project;
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
        description: project.description,
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

  handleInputChangeBody = (e, index) => {
    const { name, value } = e.target;
    let body = this.state.body;
    body[index][name] = value;
    this.setState({ body: body });
  };

  handleAddBody = () => {
    let body = this.state.body;
    body.push({ header: "", content: "" });
    this.setState({ body: body });
  };

  handleDeleteBody = (index) => {
    let body = this.state.body;
    body.splice(index, 1);
    this.setState({ body: body });
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
        description: this.state.description,
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
        description: this.state.description,
        body: this.state.body,
        priority: this.state.priority,
      });
    }
    this.props.onCance();
  };

  render() {
    const body = this.state.body;
    const viewBody = body.map((itemBody, index) => {
      return (
        <Form.Group className="mt-5 form-group-body-content" key={index}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="header"
                placeholder="Tiêu đề hiển thị trên menu nhỏ"
                value={this.state.body[index].header}
                onChange={(e) => this.handleInputChangeBody(e, index)}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="id"
                placeholder="Mã để phân biệt đoạn"
                value={this.state.body[index].id}
                onChange={(e) => this.handleInputChangeBody(e, index)}
              />
            </Col>
          </Row>
          <Form.Control
            type="text"
            as="textarea"
            name="content"
            value={this.state.body[index].content}
            onChange={(e) => this.handleInputChangeBody(e, index)}
            placeholder="Truy cập trang web https://wordhtml.com để nhập nội dung theo ý muốn, sau đó copy mã html vào đây"
            style={{ height: "300px" }}
          />
          <Button variant="success" onClick={this.handleAddBody}>
            Thêm nội dung mới
          </Button>{" "}
          <Button variant="danger" onClick={() => this.handleDeleteBody(index)}>
            Xóa mục nội dung này
          </Button>
        </Form.Group>
      );
    });

    return (
      <div className="opa-project">
        <Form className="add-project" onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Tên dự án</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Hình ảnh chính</Form.Label>
                <Form.Control
                  type="text"
                  name="mainImg"
                  value={this.state.mainImg}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Ngày mở bán</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Giá bán</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link google maps</Form.Label>
                <Form.Control
                  type="text"
                  name="maps"
                  value={this.state.maps}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link video demo</Form.Label>
                <Form.Control
                  type="text"
                  name="video"
                  value={this.state.video}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Diện tích khu đất</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={this.state.area}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>
                  Loại dự án: (1 - Mới) (2 - Hot) (10 - Hot Nhất) (3 - Thường)
                </Form.Label>
                <Form.Control
                  type="Number"
                  name="priority"
                  value={this.state.priority}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Mô tả dự án</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="description"
                  style={{ height: "200px" }}
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link ảnh ở slide giới thiệu</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="introImg"
                  placeholder="Mỗi link ảnh đặt trên mỗi dòng"
                  style={{ height: "200px" }}
                  value={this.state.introImg}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {viewBody}

          <div className="d-flex justify-content-around mt-4">
            {this.state.body.length === 0 && (
              <Button
                type="submit"
                variant="warning"
                onClick={this.handleAddBody}
              >
                Thêm nội dung cho dự án
              </Button>
            )}
            <Button variant="danger" onClick={this.props.onCance}>
              Hủy
            </Button>
            <Button type="submit">Lưu</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Change;
