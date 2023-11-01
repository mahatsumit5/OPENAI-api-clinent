import Spinner from "react-bootstrap/Spinner";

export function CustomSpinner() {
  return (
    <div className="spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
