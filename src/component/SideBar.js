import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

export const SideBar = ({ prevChats }) => {
  const f = (item, index) => (
    <>
      <li className="chat-message user-message chat-bubble" key={index}>
        {item.Query}
      </li>
      <li className="chat-message assistant-message chat-bubble">
        {item.Response}
      </li>
    </>
  );
  console.log(prevChats);
  return (
    <div className="sideBar">
      <h1>Questions</h1>
      <hr></hr>
      <Button variant="outline-primary">Reset</Button>
      <hr></hr>
      <div className="list">
        <ListGroup>
          {prevChats.map((chat, index) => (
            <ListGroup.Item action variant="info" key={index}>
              {chat.Query}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {!prevChats && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
};