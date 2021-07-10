import { Container, Button } from "react-bootstrap";
import { FcCurrencyExchange, FcLandscape, FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Projects(props) {
  const projects = props.projects.slice(0, 5);
  const imgs = props.local.rightSideImg;
  const viewProjects = projects.map((project) => {
    return (
      <div className="card" key={project._id}>
        <img src={project.mainImg} alt={project.name} />
        <div className="card-body">
          <Link to={"/project/" + project.name}>
            <h5>{project.name}</h5>
          </Link>
          <span>
            <FcLandscape /> <b>Địa chỉ :</b> {project.address}
          </span>
          <br />
          <span>
            <FcCurrencyExchange />{" "}
            <b>
              Giá :{" "}
              <span style={{ color: "#dc3545" }}>{project.price} VNĐ</span>
            </b>
          </span>
          <br />
          <span>
            <b>
              <FcHome /> Diện tích :
            </b>{" "}
            {project.area} m <sup>2</sup>
          </span>
          <p className="des-content">{project.description}</p>
          <br />
          <Button className="outline-info" variant="warning">
            <Link to={"/project/" + project.name}>Chi tiết</Link>
          </Button>{" "}
          <Button className="outline-info" variant="danger">
            <a
              href={"tel:" + props.local.phonenumber1}
              style={{ color: "white" }}
            >
              Gọi ngay
            </a>
          </Button>
        </div>
      </div>
    );
  });
  const viewImgs = imgs.map((img, index) => {
    return <img src={img} className="img-view-right" alt="" key={index} />;
  });
  return (
    <Container className="margintop">
      <h3>
        DANH SÁCH CÁC DỰ ÁN BẤT ĐỘNG SẢN{" "}
        <Link className="detailviewa" to="/projects">
          Xem chi tiết tất cả dự án
        </Link>
      </h3>
      <p>DANH SÁCH CÁC DỰ ÁN ĐANG ĐƯỢC MỞ BÁN CỦA CHÚNG TÔI</p>
      <div className="d-flex justify-content-between">
        <div className="col-9 list-project">{viewProjects}</div>
        <div className="col-3 list-img">{viewImgs}</div>
      </div>
      <Button variant="success" className="detailviewmore">
        <Link to="/projects"> Xem thêm</Link>
      </Button>
    </Container>
  );
}
