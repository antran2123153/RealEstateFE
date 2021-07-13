import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "../axios";

class Local extends Component {
  state = {
    logo: "",
    name: "",
    facebook: "",
    youtube: "",
    twiter: "",
    gmail: "",
    address: "",
    phonenumber: "",
    description: "",
    rightSideImg: "",
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
      phonenumber: local.phonenumber,
      description: local.description,
      rightSideImg: local.rightSideImg,
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

    await axios.post(`/api/local/update`, {
      id: this.props.local._id,
      logo: local.logo,
      name: local.name,
      facebook: local.facebook,
      youtube: local.youtube,
      twiter: local.twiter,
      gmail: local.gmail,
      address: local.address,
      phonenumber: local.phonenumber,
      description: local.description,
      rightSideImg: local.rightSideImg,
    });
  };

  render() {
    return (
      <>
        <Form className="" onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Ảnh logo</Form.Label>
                <Form.Control
                  type="text"
                  name="logo"
                  value={this.state.logo}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Tên trang web</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Link facebook</Form.Label>
                <Form.Control
                  type="facebook"
                  name="name"
                  value={this.state.facebook}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link youtube</Form.Label>
                <Form.Control
                  type="text"
                  name="youtube"
                  value={this.state.youtube}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link twiter</Form.Label>
                <Form.Control
                  type="text"
                  name="twiter"
                  value={this.state.twiter}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link gmail</Form.Label>
                <Form.Control
                  type="text"
                  name="gmail"
                  value={this.state.gmail}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
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
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Mô tả cuối web</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="description"
                  style={{ height: "150px" }}
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Link hình quảng cáo</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="rightSideImg"
                  style={{ height: "150px" }}
                  value={this.state.rightSideImg}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="margin-button">
            Lưu thay đổi
          </Button>
        </Form>
      </>
    );
  }
}

export default Local;
