import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Contract extends Component {
  state = {
    fullname: "",
    phonenumber: "",
    birthday: "",
    address: "",
    email: "",
    isSubmit: false,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Gửi thành công");
    this.setState({ isSubmit: true });
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
                <label>Ngày sinh :</label>
                <input
                  className="form-control"
                  name="birthday"
                  placeholder="Enter birthday"
                  value={this.state.birthday}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Địa chỉ :</label>
                <input
                  className="form-control"
                  name="address"
                  placeholder="Enter address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Địa chỉ email:</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Gửi
              </button>
              <p className="text-secondary mt-3">
                Bạn chỉ cần điền các thông tin liên lạc chính như họ tên và số
                điện thoại. Chúng tôi sẽ kết nối đến bạn trong thời gian sớm
                nhất.
              </p>
            </form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Contract;
