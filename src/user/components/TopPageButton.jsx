import { Button } from "react-bootstrap";
import { FcRightUp2 } from "react-icons/fc";

export default function TopPageButton(props) {
  return (
    <Button
      variant="info"
      className="top-page-bt"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FcRightUp2 />
    </Button>
  );
}
