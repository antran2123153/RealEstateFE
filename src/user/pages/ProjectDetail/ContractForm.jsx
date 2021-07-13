import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FcCallTransfer, FcBusinessman } from "react-icons/fc";
import axios from "../../../axios";

class ContractForm extends Component {
  state = {
    fullname: "",
    phonenumber: "",
    text: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`/api/user/add`, {
      name: this.state.fullname,
      phonenumber: this.state.phonenumber,
      text: this.state.text,
    });
    this.setState({ fullname: "", phonenumber: "", text: "" });
    alert("Gửi thành công");
  };

  render() {
    return (
      <Card className="contract-form-project">
        <Card.Body>
          <FcBusinessman className="icon-contract" />
          <Card.Title style={{ textAlign: "center", marginBottom: "20px" }}>
            ĐĂNG KÝ <FcCallTransfer />
          </Card.Title>
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              name="fullname"
              required
              placeholder="Họ và tên"
              value={this.state.fullname}
              onChange={this.handleInputChange}
            />
            <input
              className="form-control"
              required
              name="phonenumber"
              placeholder="Số điện thoại"
              value={this.state.phonenumber}
              onChange={this.handleInputChange}
            />
            <textarea
              className="form-control"
              name="text"
              placeholder="Lời nhắn"
              value={this.state.text}
              onChange={this.handleInputChange}
            />
            <button type="submit">Gửi tin nhắn</button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}

export default ContractForm;
