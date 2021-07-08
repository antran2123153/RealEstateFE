import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import { Card, CardDeck } from "react-bootstrap";
import { configData, sortByPri } from "../untils/functions";
import { Link } from "react-router-dom";
import { FcCurrencyExchange, FcLandscape, FcHome } from "react-icons/fc";

export default function Home(props) {
  const hot = props.projects.sort(sortByPri).slice(0, 5);

  let miniProject = props.projects.slice(0, 4).map((project, index) => {
    return (
      <Card>
        <Card.Img variant="top" src={project.mainImg} />
        <Card.Body>
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
          <p className="des-content">{configData(project.body[0])[2]}</p>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <Gallery projects={hot} />
      <Projects projects={props.projects} local={props.local} />
      <h3 className="mini-h2 ">Tin tức mới nhất</h3>
      <CardDeck className="project-mini">{miniProject}</CardDeck>
    </>
  );
}
