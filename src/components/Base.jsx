import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      <Container>{children}</Container>
    </div>
  );
};
export default Base;
