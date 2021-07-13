import { useParams } from "react-router-dom";
import SlideShow from "./SlideShow";
import ContractForm from "./ContractForm";
import CallForm from "./CallForm";
import { ListGroup, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcCurrencyExchange, FcLandscape, FcHome } from "react-icons/fc";

export default function ProjectDetail(props) {
  const param = useParams();
  const project = props.projects.find((item) => item.name === param.name);

  const viewBody = project.body.map((item) => {
    return (
      <div className="content-project-data" id={item.id}>
        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
      </div>
    );
  });

  let menuList = project.body.map((item, index) => {
    return (
      <ListGroup.Item
        key={index}
        action
        href={"#" + item.id}
        className="sub-text"
      >
        {item.header}
      </ListGroup.Item>
    );
  });

  let miniProject = props.projects.slice(0, 4).map((project, index) => {
    return (
      <Card key={index}>
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
          <p className="des-content"></p>
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

      <CallForm phone={props.local.phonenumber} />
    </>
  );
}
