import { Container } from "react-bootstrap";
import { FcPositiveDynamic, FcLandscape } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Gallery(props) {
  const projects = props.projects;
  const view = projects.map((project, index) => {
    const i = "gallery-item gallery-item-" + (index + 1).toString();
    return (
      <div className={i} key={project._id}>
        <Link to={"/project/" + project._id}>
          <img
            src={project.mainImg}
            className="gallery-img"
            alt={project.name}
          ></img>
        </Link>
        <div className="title-gallery-item">
          <Link to={"/project/" + project._id}>
            <h4>{project.name}</h4>
          </Link>
          <span>
            <FcPositiveDynamic /> <b>Giá : {project.price} triệu VNĐ</b> -- Ngày
            ra mắt : {project.date}
          </span>
          <br />
          <span>
            <FcLandscape /> Diện tích : {project.area} m2 -- Địa chỉ :{" "}
            {project.address}
          </span>
          {index === 0 && <p className="des-content">{project.descriptions}</p>}
        </div>
      </div>
    );
  });
  return (
    <Container className="margintop">
      <h3>DỰ ÁN BẤT ĐỘNG SẢN</h3>
      <p>DANH SÁCH CÁC DỰ ÁN HOT NHẤT HIỆN NAY</p>
      <div className="gallery">{view}</div>
    </Container>
  );
}
