import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg" className="nagivation">
      <Navbar.Brand>
        <Link to="/">{props.local.name}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="navbar-item">
            Trang chủ
          </Link>
          <Link to="/contract" className="navbar-item">
            Liên hệ
          </Link>
          <Link to="/projects" className="navbar-item">
            Danh sách dự án
          </Link>
          <Link to="/" className="navbar-item">
            Giới thiệu
          </Link>
          <Link to="/news" className="navbar-item">
            Tin tức
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
