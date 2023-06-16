import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { HamBurger } from "./Hambar";
export const Search = ({ fetchData, callback, prevChats }) => {
  const [questions, setQuestions] = useState("");
  callback(questions);
  //   console.log(prevChats);
  setInterval(() => {}, 100);
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
  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <div> Sumit GPT</div>

          <HamBurger
            prevChats={prevChats}
            callback={callback}
            fetchData={fetchData}
          />
        </div>

        <ul className="chat-messages">
          {" "}
          {prevChats.map(f)}
          {!questions && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </ul>

        <div className="input-area">
          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="text-area"
                placeholder="Enter your Questions"
                name="prompt"
                onChange={(e) => setQuestions(e.target.value)}
                value={questions}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </div>
        <div className="input-area">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              fetchData(questions);
              console.log(questions);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
