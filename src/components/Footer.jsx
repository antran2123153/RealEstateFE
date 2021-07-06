import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Footer(props) {
  const local = props.local;
  return (
    <footer>
      <div className="container">
        <div className="noi-dung about">
          <h2>{local.name}</h2>
          <p>{local.description}</p>
          <ul className="social-icon">
            <li>
              <a target="blank" href={local.facebook}>
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a target="blank" href={local.instagram}>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a target="blank" href={local.youtube}>
                <AiFillYoutube />
              </a>
            </li>
            <li>
              <a target="blank" href={local.twiter}>
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="noi-dung links">
          <h2>Đường Dẫn</h2>
          <ul>
            <li>
              <Link to="/">Trang Chủ</Link>
            </li>
            <li>
              <Link to="/contract">Liên hệ</Link>
            </li>
            <li>
              <Link to="/projects">Danh sách dự án</Link>
            </li>
            <li>
              <Link to="/introduction">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/news">Tin tức</Link>
            </li>
            <li>
              <Link to="/">Điều Kiện Chính Sách</Link>
            </li>
          </ul>
        </div>
        <div className="noi-dung contact">
          <h2>Thông Tin Liên Hệ</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fa fa-map-marker" />
              </span>
              <span>{local.address}</span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" />
              </span>
              <p>
                <a href={"tel:" + local.phonenumber1}>
                  Số điện thoại: {local.phonenumber1}
                </a>
                <br />
                <a href={"tel:" + local.phonenumber2}>
                  Số điện thoại: {local.phonenumber2}
                </a>
              </p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" />
              </span>
              <p>
                <a href={"mailto:" + local.gmail}>Email: {local.gmail}</a>
              </p>
            </li>
            <li>
              <form className="form">
                <input
                  type="email"
                  className="mail-contract"
                  placeholder="Đăng Ký Email"
                />
                <Button variant="primary">Gửi</Button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
