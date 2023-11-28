import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <span style={{ marginLeft: "10px" }}> Loading...</span>
    </div>
  );
}

export default Loader;
