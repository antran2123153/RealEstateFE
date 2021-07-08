import { useLocation } from "react-router-dom";
import SlideShow from "./SlideShow";
import ContractForm from "./ContractForm";
import CallForm from "./CallForm";
import { ListGroup, Card, CardDeck } from "react-bootstrap";
import { configData } from "../../untils/functions";
import { Link } from "react-router-dom";
import { FcCurrencyExchange, FcLandscape, FcHome } from "react-icons/fc";

export default function ProjectDetail(props) {
  const location = useLocation();
  const name = location.pathname.slice(9);
  const project = props.projects.find((item) => item.name === name);

  let viewBody = project.body.map((bodyItem) => {
    const body = configData(bodyItem);
    let viewBodyItem = body.map((item, index) => {
      if (index === 0) {
        return <></>;
      } else if (index === 1) {
        return <h3 key={index}>{item}</h3>;
      } else if (item.substring(0, 4) === "http") {
        return <img key={index} src={item} alt="" />;
      } else {
        return <p key={index}>{item}</p>;
      }
    });
    return (
      <div className="content-project-data" id={body[0]}>
        {viewBodyItem}
      </div>
    );
  });

  let menuList = project.body.map((bodyItem, index) => {
    const body = configData(bodyItem);
    return (
      <ListGroup.Item key={index} action href={"#" + body[0]}>
        {body[1]}
      </ListGroup.Item>
    );
  });

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
      <div className="project-detail">
        <SlideShow
          imgs={project.introImg}
          maps={project.maps}
          video={project.video}
        />

        <div className="project-detail-header d-flex justify-content-between ">
          <div>
            <h2>{project.name}</h2>
            <h5>{project.address}</h5>
          </div>
          <div>
            <h6 style={{ color: "red" }}>Giá bán: {project.price} VNĐ</h6>
            <h6>
              Diện tích : {project.area} m <sup>2</sup>
            </h6>
          </div>
        </div>

        <div className="d-flex justify-content-center body-project-detail">
          <div className="col-8 uncolum">
            <ListGroup horizontal className="menu-project-body">
              {menuList}
            </ListGroup>
            {viewBody}
          </div>
          <div className="col-3 uncolum2">
            <ContractForm />
          </div>
        </div>
      </div>

      <h3 className="mini-h2 ">Dự án liên quan</h3>
      <CardDeck className="project-mini">{miniProject}</CardDeck>

      <CallForm phone={props.local.phonenumber1} />
    </>
  );
}
