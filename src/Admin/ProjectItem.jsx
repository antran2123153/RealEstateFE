import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ProjectItem extends Component {
  state = {};

  ondelete = () => {
    this.props.handleDelete(this.props.project._id);
  };

  render() {
    const project = this.props.project;
    const index = this.props.index;
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{project.name}</td>
        <td>{project.price}</td>
        <td>{project.address}</td>
        <td>{project.state}</td>
        <td className="item-food-button">
          <Button
            variant="warning"
            onClick={() => {
              this.props.clickChange(this.props.project._id);
            }}
          >
            Sửa
          </Button>{" "}
          <Button variant="danger" onClick={this.ondelete}>
            Xóa
          </Button>
        </td>
      </tr>
    );
  }
}

export default ProjectItem;
