import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import axios from "../axios";
import ProjectItem from "./ProjectItem";
import LocalManager from "./LocalManager";
import Change from "./Change";
import { Redirect } from "react-router-dom";
import { Loading } from "../untils";

class AccountManager extends Component {
  state = {
    projects: [],
    isAdd: false,
    isModify: false,
    currentItem: "",
    local: {},
    users: [],
  };

  UNSAFE_componentWillMount() {
    this.getdata();
  }

  getdata = async () => {
    const data1 = await axios.get(
      `https://bds-web-server.herokuapp.com/api/user`
    );
    const data2 = await axios.get(
      `https://bds-web-server.herokuapp.com/api/project`
    );
    const local = await axios.get(
      `https://bds-web-server.herokuapp.com/api/local`
    );
    this.setState({
      users: data1.data.users,
      projects: data2.data.projects,
      local: local.data,
    });
  };

  clickAdd = () => {
    if (this.state.isAdd === true) this.getdata();
    this.setState({ isAdd: !this.state.isAdd });
  };

  clickChange = (_id) => {
    if (this.state.isModify === false) {
      this.setState({
        currentItem: _id,
      });
    }
    if (this.state.isModify === true) this.getdata();
    this.setState({ isModify: !this.state.isModify });
  };

  handleDelete = async (_id) => {
    await axios.post(
      `https://bds-web-server.herokuapp.com/api/project/delete`,
      {
        id: _id,
      }
    );
    this.getdata();
  };

  handleDeleteUser = async (_id) => {
    await axios.post(`https://bds-web-server.herokuapp.com/api/user/delete`, {
      id: _id,
    });
    this.getdata();
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/admin/login" />;
    }
    const { projects, local, users } = this.state;
    if (Object.keys(local).length === 0) return <Loading />;
    const listProjects =
      projects.length === 0 ? (
        <></>
      ) : (
        projects.map((project, index) => (
          <ProjectItem
            project={project}
            index={index}
            clickChange={this.clickChange}
            handleDelete={this.handleDelete}
          />
        ))
      );

    const listUser =
      users.length === 0 ? (
        <></>
      ) : (
        users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.phonenumber}</td>
            <td>{user.text}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  this.handleDeleteUser(user._id);
                }}
              >
                Xóa
              </Button>
            </td>
          </tr>
        ))
      );

    return (
      <Container className="margintop">
        {this.state.isAdd && <Change onCance={this.clickAdd} />}
        {this.state.isModify && (
          <Change
            project={projects.find(
              (item) => item._id === this.state.currentItem
            )}
            onCance={this.clickChange}
          />
        )}

        <h2 className="margintop">DANH SÁCH ĐĂNG KÝ CỦA KHÁCH HÀNG</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Lời nhắn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{listUser}</tbody>
        </Table>

        <h2 className="margintop">DANH SÁCH DỰ ÁN</h2>
        <Button variant="primary" className="mb-3 mt-3" onClick={this.clickAdd}>
          Thêm dự án mới
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên dự án</th>
              <th>Giá</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{listProjects}</tbody>
        </Table>

        <h2 className="margintop">THÔNG TIN CỤC BỘ TRANG WEB</h2>
        <LocalManager local={local} />
      </Container>
    );
  }
}

export default AccountManager;
