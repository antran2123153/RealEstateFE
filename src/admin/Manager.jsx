import React, { Component } from "react";
import { Table, Button, Tabs, Tab } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "../axios";
import ProjectItem from "./ProjectItem";
import Local from "./Local";
import Change from "./Change";
import Loading from "./Loading";

class Manager extends Component {
  state = {
    projects: [],
    isAdd: false,
    isModify: false,
    local: {},
    users: [],
  };

  UNSAFE_componentWillMount() {
    this.getdata();
  }

  getdata = async () => {
    const data1 = await axios.get(`/api/user`);
    const data2 = await axios.get(`/api/project`);
    const local = await axios.get(`/api/local`);
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
    await axios.post(`/api/project/delete`, {
      id: _id,
    });
    this.getdata();
  };

  handleDeleteUser = async (_id) => {
    await axios.post(`/api/user/delete`, {
      id: _id,
    });
    this.getdata();
  };

  render() {
    if (localStorage.getItem("token") === null) {
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
                X??a
              </Button>
            </td>
          </tr>
        ))
      );

    return (
      <>
        {this.state.isAdd && <Change onCance={this.clickAdd} />}
        {this.state.isModify && (
          <Change
            project={projects.find(
              (item) => item._id === this.state.currentItem
            )}
            onCance={this.clickChange}
          />
        )}

        <Tabs defaultActiveKey="khachhang" className="uncontrolled-tab-example">
          <Tab eventKey="khachhang" title="Kh??ch h??ng ????ng k??">
            <h2 className="margintop">DANH S??CH ????NG K?? C???A KH??CH H??NG</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>T??n kh??ch h??ng</th>
                  <th>S??? ??i???n tho???i</th>
                  <th>L???i nh???n</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{listUser}</tbody>
            </Table>
          </Tab>

          <Tab eventKey="duan" title="Qu???n l?? d??? ??n">
            <h2 className="margintop">DANH S??CH D??? ??N</h2>
            <Button
              variant="primary"
              className="mb-3 mt-3"
              onClick={this.clickAdd}
            >
              Th??m d??? ??n m???i
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>T??n d??? ??n</th>
                  <th>Gi??</th>
                  <th>?????a ch???</th>
                  <th>Lo???i d??? ??n</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{listProjects}</tbody>
            </Table>
          </Tab>

          <Tab eventKey="local" title="Th??ng tin c???c b???">
            <h2 className="margintop">TH??NG TIN C???C B??? TRANG WEB</h2>
            <Local local={local} />
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default Manager;
