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
                placeholder="Ti??u ????? hi???n th??? tr??n menu nh???"
                value={this.state.body[index].header}
                onChange={(e) => this.handleInputChangeBody(e, index)}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                name="id"
                placeholder="M?? ????? ph??n bi???t ??o???n"
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
            placeholder="Truy c???p trang web https://wordhtml.com ????? nh???p n???i dung theo ?? mu???n, sau ???? copy m?? html v??o ????y"
            style={{ height: "300px" }}
          />
          <Button variant="success" onClick={this.handleAddBody}>
            Th??m n???i dung m???i
          </Button>{" "}
          <Button variant="danger" onClick={() => this.handleDeleteBody(index)}>
            X??a m???c n???i dung n??y
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
                <Form.Label>T??n d??? ??n</Form.Label>
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
                <Form.Label>H??nh ???nh ch??nh</Form.Label>
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
                <Form.Label>Ng??y m??? b??n</Form.Label>
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
                <Form.Label>Gi?? b??n</Form.Label>
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
                <Form.Label>Di???n t??ch khu ?????t</Form.Label>
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
                <Form.Label>?????a ch???</Form.Label>
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
                  Lo???i d??? ??n: (1 - M???i) (2 - Hot) (10 - Hot Nh???t) (3 - Th?????ng)
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
                <Form.Label>M?? t??? d??? ??n</Form.Label>
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
                <Form.Label>Link ???nh ??? slide gi???i thi???u</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="introImg"
                  placeholder="M???i link ???nh ?????t tr??n m???i d??ng"
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
                Th??m n???i dung cho d??? ??n
              </Button>
            )}
            <Button variant="danger" onClick={this.props.onCance}>
              H???y
            </Button>
            <Button type="submit">L??u</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Change;
