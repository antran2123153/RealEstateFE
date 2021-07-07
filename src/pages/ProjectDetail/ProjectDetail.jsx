import { useLocation } from "react-router-dom";
import SlideShow from "./SlideShow";
import ContractForm from "./ContractForm";
import CallForm from "./CallForm";
import { ListGroup } from "react-bootstrap";

function MenuSide() {
  return (
    <ListGroup
      className="contract-form-project mt-5"
      defaultActiveKey="#descriptions"
    >
      <ListGroup.Item action href="#descriptions">
        Tổng quan
      </ListGroup.Item>
      <ListGroup.Item action href="#location">
        Vị trí
      </ListGroup.Item>
      <ListGroup.Item action href="#utilities">
        Tiện ích
      </ListGroup.Item>
      <ListGroup.Item action href="#ground">
        Mặt bằng
      </ListGroup.Item>
      <ListGroup.Item action href="#policy">
        Chính sách
      </ListGroup.Item>
    </ListGroup>
  );
}

export default function ProjectDetail(props) {
  const location = useLocation();
  const id = location.pathname.slice(9);
  const project = props.projects.find((item) => item._id === id);

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
            <h6 style={{ color: "red" }}>Giá bán: {project.price} Triệu VNĐ</h6>
            <h6>Diện tích : {project.area} mét vuông</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between body-project-detail">
          <div className="col-2">
            <MenuSide />
          </div>
          <div className="col-7 uncolum">
            <div className="content-project-data" id="descriptions">
              <h3>Tổng quan</h3>
              <p>{project.descriptions}</p>
              <img src={project.descriptionsImg} alt="" />
            </div>
            <div className="content-project-data" id="location">
              <h3>Vị trí</h3>
              <p>{project.location}</p>
              <img src={project.locationImg} alt="" />
            </div>
            <div className="content-project-data" id="utilities">
              <h3>Tiện ích</h3>
              <p>{project.utilities}</p>
              <img src={project.utilitiesImg} alt="" />
            </div>
            <div className="content-project-data" id="ground">
              <h3>Mặt bằng</h3>
              <p>{project.ground}</p>
              <img src={project.groundImg} alt="" />
            </div>
            <div className="content-project-data" id="policy">
              <h3>Chính sách bán hàng</h3>
              <p>{project.policy}</p>
              <img src={project.policyImg} alt="" />
            </div>
          </div>
          <div className="col-3 uncolum2">
            <ContractForm />
          </div>
        </div>
      </div>
      <CallForm phone={props.local.phonenumber1} />
    </>
  );
}
