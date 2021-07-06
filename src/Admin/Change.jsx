import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "../axios";

class Change extends Component {
  state = {
    mainImg: "",
    introImg1: "",
    introImg2: "",
    introImg3: "",
    introImg4: "",
    introImg5: "",
    date: "",
    name: "",
    price: "",
    maps: "",
    video: "",
    area: "",
    address: "",
    descriptions: "",
    location: "",
    utilities: "",
    ground: "",
    policy: "",
    descriptionsImg: "",
    locationImg: "",
    utilitiesImg: "",
    groundImg: "",
    policyImg: "",
    state: "",
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
        introImg1: project.introImg[0],
        introImg2: project.introImg[1],
        introImg3: project.introImg[2],
        introImg4: project.introImg[3],
        introImg5: project.introImg[4],
        descriptions: project.descriptions,
        location: project.location,
        utilities: project.utilities,
        ground: project.ground,
        policy: project.policy,
        descriptionsImg: project.descriptionsImg,
        locationImg: project.locationImg,
        utilitiesImg: project.utilitiesImg,
        groundImg: project.groundImg,
        policyImg: project.policyImg,
        state: project.state,
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
    let introImg = [];
    if (this.state.introImg1 !== "") introImg.push(this.state.introImg1);
    if (this.state.introImg2 !== "") introImg.push(this.state.introImg2);
    if (this.state.introImg3 !== "") introImg.push(this.state.introImg3);
    if (this.state.introImg4 !== "") introImg.push(this.state.introImg4);
    if (this.state.introImg5 !== "") introImg.push(this.state.introImg5);

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
        introImg: introImg,
        descriptions: this.state.descriptions,
        location: this.state.location,
        utilities: this.state.utilities,
        ground: this.state.ground,
        policy: this.state.policy,
        descriptionsImg: this.state.descriptionsImg,
        locationImg: this.state.locationImg,
        utilitiesImg: this.state.utilitiesImg,
        groundImg: this.state.groundImg,
        policyImg: this.state.policyImg,
        state: this.state.state,
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
        introImg: introImg,
        descriptions: this.state.descriptions,
        location: this.state.location,
        utilities: this.state.utilities,
        ground: this.state.ground,
        policy: this.state.policy,
        descriptionsImg: this.state.descriptionsImg,
        locationImg: this.state.locationImg,
        utilitiesImg: this.state.utilitiesImg,
        groundImg: this.state.groundImg,
        policyImg: this.state.policyImg,
        state: this.state.state,
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
            <Form.Label>Link ảnh ở slide giới thiệu đầu - 1</Form.Label>
            <Form.Control
              type="text"
              name="introImg1"
              value={this.state.introImg1}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link ảnh ở slide giới thiệu đầu - 2</Form.Label>
            <Form.Control
              type="text"
              name="introImg2"
              value={this.state.introImg2}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link ảnh ở slide giới thiệu đầu - 3</Form.Label>
            <Form.Control
              type="text"
              name="introImg3"
              value={this.state.introImg3}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link ảnh ở slide giới thiệu đầu - 4</Form.Label>
            <Form.Control
              type="text"
              name="introImg4"
              value={this.state.introImg4}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link ảnh ở slide giới thiệu đầu - 5</Form.Label>
            <Form.Control
              type="text"
              name="introImg5"
              value={this.state.introImg5}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả tổng quan dự án</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="descriptions"
              value={this.state.descriptions}
              onChange={this.handleInputChange}
            />
            <Form.Control
              type="text"
              name="descriptionsImg"
              value={this.state.descriptionsImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả vị trí dự án</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
            <Form.Control
              type="text"
              name="locationImg"
              value={this.state.locationImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả tiện ích dự án</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="utilities"
              value={this.state.utilities}
              onChange={this.handleInputChange}
            />
            <Form.Control
              type="text"
              name="utilitiesImg"
              value={this.state.utilitiesImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả mặt bằng dự án</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="ground"
              value={this.state.ground}
              onChange={this.handleInputChange}
            />
            <Form.Control
              type="text"
              name="groundImg"
              value={this.state.groundImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả chính sách bán hàng</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="policy"
              value={this.state.policy}
              onChange={this.handleInputChange}
            />
            <Form.Control
              type="text"
              name="policyImg"
              value={this.state.policyImg}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trạng thái</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={this.state.state}
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
