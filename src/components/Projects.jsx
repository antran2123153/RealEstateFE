import { Container, Button } from "react-bootstrap";
import { FcPositiveDynamic, FcLandscape, FcCallTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Projects(props) {
  const projects = props.projects.slice(0, 5);
  const imgs = props.imgs;
  const viewProjects = projects.map((project) => {
    return (
      <div className="card" key={project._id}>
        <img src={project.mainImg} alt={project.name} />
        <div className="card-body">
          <Link to={"/project/" + project._id}>
            <h5>{project.name}</h5>
          </Link>
          <span>
            <FcPositiveDynamic /> <b>Giá : {project.price} triệu VNĐ</b> - Ngày
            ra mắt : {project.date}
          </span>
          <br />
          <span>
            <FcLandscape /> Diện tích : {project.area}m2 - Địa chỉ :{" "}
            {project.address}
          </span>
          <p className="des-content">{project.descriptions}</p>
          <br />
          <Button className="outline-info">
            <FcCallTransfer /> Liên hệ để biết thêm chi tiết
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
