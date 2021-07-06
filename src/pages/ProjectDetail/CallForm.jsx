import React, { Component } from "react";
import { AiOutlinePhone, AiOutlineMessage } from "react-icons/ai";
import axios from "../../axios";

class CallForm extends Component {
  state = {
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
      text: this.state.text,
    });
    this.setState({ text: "" });
    alert("Gửi thành công");
  };

  render() {
    return (
      <div className="call-form d-flex justify-content-around">
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          placeholder="Email - SĐT"
        ></input>
        <div>
          <AiOutlineMessage className="icon-call" onClick={this.handleSubmit} />
        </div>
        <div>
          <a href={"tel:" + this.props.phone}>
            <AiOutlinePhone className="icon-call" />
          </a>
        </div>
      </div>
    );
  }
}

export default CallForm;
