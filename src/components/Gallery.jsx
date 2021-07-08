import { Container } from "react-bootstrap";
import { FcCurrencyExchange, FcLandscape, FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import { configData } from "../untils/functions";

export default function Gallery(props) {
  const projects = props.projects;
  const view = projects.map((project, index) => {
    const i = "gallery-item gallery-item-" + (index + 1).toString();
    return (
      <div className={i} key={project._id}>
        <Link to={"/project/" + project.name}>
          <img
            src={project.mainImg}
            className="gallery-img"
            alt={project.name}
          ></img>
        </Link>
        <div className="title-gallery-item">
          <Link to={"/project/" + project.name}>
            <h4>{project.name}</h4>
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
          {index === 0 && (
            <p className="des-content">{configData(project.body[0])[2]}</p>
          )}
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
