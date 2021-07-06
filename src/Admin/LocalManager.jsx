import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "../axios";

class LocalManager extends Component {
  state = {
    logo: "",
    name: "",
    facebook: "",
    youtube: "",
    twiter: "",
    gmail: "",
    address: "",
    phonenumber1: "",
    phonenumber2: "",
    description: "",
    footerImg1: "",
    footerImg2: "",
    footerImg3: "",
    footerImg4: "",
    footerImg5: "",
    footerImg6: "",
    rightSideImg1: "",
    rightSideImg2: "",
    rightSideImg3: "",
    rightSideImg4: "",
    rightSideImg5: "",
  };

  UNSAFE_componentWillMount() {
    const local = this.props.local;
    this.setState({
      logo: local.logo,
      name: local.name,
      facebook: local.facebook,
      youtube: local.youtube,
      twiter: local.twiter,
      gmail: local.gmail,
      address: local.address,
      phonenumber1: local.phonenumber1,
      phonenumber2: local.phonenumber2,
      description: local.description,
      footerImg1: local.footerImg[0],
      footerImg2: local.footerImg[1],
      footerImg3: local.footerImg[2],
      footerImg4: local.footerImg[3],
      footerImg5: local.footerImg[4],
      footerImg6: local.footerImg[5],
      rightSideImg1: local.rightSideImg[0],
      rightSideImg2: local.rightSideImg[1],
      rightSideImg3: local.rightSideImg[2],
      rightSideImg4: local.rightSideImg[3],
      rightSideImg5: local.rightSideImg[4],
    });
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
    const local = this.state;
    let footerImg = [];
    if (local.footerImg1 !== "") footerImg.push(local.footerImg1);
    if (local.footerImg2 !== "") footerImg.push(local.footerImg2);
    if (local.footerImg3 !== "") footerImg.push(local.footerImg3);
    if (local.footerImg4 !== "") footerImg.push(local.footerImg4);
    if (local.footerImg5 !== "") footerImg.push(local.footerImg5);
    if (local.footerImg6 !== "") footerImg.push(local.footerImg6);

    let rightSideImg = [];
    if (local.rightSideImg1 !== "") rightSideImg.push(local.rightSideImg1);
    if (local.rightSideImg2 !== "") rightSideImg.push(local.rightSideImg2);
    if (local.rightSideImg3 !== "") rightSideImg.push(local.rightSideImg3);
    if (local.rightSideImg4 !== "") rightSideImg.push(local.rightSideImg4);
    if (local.rightSideImg5 !== "") rightSideImg.push(local.rightSideImg5);

    await axios.post(`/api/local/update`, {
      id: this.props.local._id,
      logo: local.logo,
      name: local.name,
      facebook: local.facebook,
      youtube: local.youtube,
      twiter: local.twiter,
      gmail: local.gmail,
      address: local.address,
      phonenumber1: local.phonenumber1,
      phonenumber2: local.phonenumber2,
      description: local.description,
      footerImg: footerImg,
      rightSideImg: rightSideImg,
    });
  };

  render() {
    return (
      <div className="">
        <Form className="" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Tên logo</Form.Label>
            <Form.Control
              type="text"
              name="logo"
              value={this.state.logo}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tên trang web</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link facebook</Form.Label>
            <Form.Control
              type="facebook"
              name="name"
              value={this.state.facebook}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link youtube</Form.Label>
            <Form.Control
              type="text"
              name="youtube"
              value={this.state.youtube}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link twiter</Form.Label>
            <Form.Control
              type="text"
              name="twiter"
              value={this.state.twiter}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link gmail</Form.Label>
            <Form.Control
              type="text"
              name="gmail"
              value={this.state.gmail}
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
            <Form.Label>Số điện thoại 1</Form.Label>
            <Form.Control
              type="text"
              name="phonenumber1"
              value={this.state.phonenumber1}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Số điện thoại 2</Form.Label>
            <Form.Control
              type="text"
              name="phonenumber2"
              value={this.state.phonenumber2}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả cuối web</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 1</Form.Label>
            <Form.Control
              type="text"
              name="footerImg1"
              value={this.state.footerImg1}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 2</Form.Label>
            <Form.Control
              type="text"
              name="footerImg2"
              value={this.state.footerImg2}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 3</Form.Label>
            <Form.Control
              type="text"
              name="footerImg3"
              value={this.state.footerImg3}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 4</Form.Label>
            <Form.Control
              type="text"
              name="footerImg4"
              value={this.state.footerImg4}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 5</Form.Label>
            <Form.Control
              type="text"
              name="footerImg5"
              value={this.state.footerImg5}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình cuối web 6</Form.Label>
            <Form.Control
              type="text"
              name="footerImg6"
              value={this.state.footerImg6}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình quảng cáo 1</Form.Label>
            <Form.Control
              type="text"
              name="rightSideImg1"
              value={this.state.rightSideImg1}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình quảng cáo 2</Form.Label>
            <Form.Control
              type="text"
              name="rightSideImg2"
              value={this.state.rightSideImg2}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình quảng cáo 3</Form.Label>
            <Form.Control
              type="text"
              name="rightSideImg3"
              value={this.state.rightSideImg3}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình quảng cáo 4</Form.Label>
            <Form.Control
              type="text"
              name="rightSideImg4"
              value={this.state.rightSideImg4}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Link hình quảng cáo 5</Form.Label>
            <Form.Control
              type="text"
              name="rightSideImg5"
              value={this.state.rightSideImg5}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button type="submit">Lưu thay đổi</Button>
        </Form>
      </div>
    );
  }
}

export default LocalManager;
