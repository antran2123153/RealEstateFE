import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "../../axios";

class Contract extends Component {
  state = {
    fullname: "",
    phonenumber: "",
    text: "",
    isSubmit: false,
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
    alert("Gửi thành công");
    this.setState({
      fullname: "",
      phonenumber: "",
      birthday: "",
      address: "",
      email: "",
      isSubmit: true,
    });
  };

  render() {
    if (this.state.isSubmit) return <Redirect to="/"></Redirect>;
    return (
      <Container className="contract-form">
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              LIÊN HỆ VỚI CHÚNG TÔI
            </Card.Title>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group mt-3">
                <label>Họ và tên : </label>
                <input
                  className="form-control"
                  name="fullname"
                  required
                  placeholder="Enter fullname"
                  value={this.state.fullname}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Số điện thoại : </label>
                <input
                  className="form-control"
                  required
                  name="phonenumber"
                  placeholder="Enter phone number"
                  value={this.state.phonenumber}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Lời nhắn :</label>
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="Lời nhắn"
                  value={this.state.text}
                  onChange={this.handleInputChange}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Gửi
              </button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Contract;
