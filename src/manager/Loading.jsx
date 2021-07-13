import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Container className="loading">
      <Spinner animation="border" role="status" variant="info"></Spinner>
      <span>Loading...</span>
    </Container>
  );
}
