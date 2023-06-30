import { Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { fetchData } from "../axios/axiosHelper.js";
import { useState, useEffect } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { HamBurger } from "./Hambar";
export const FormComponent = () => {
  const [questions, setQuestions] = useState("");
  const [message, setMessage] = useState("");
  const [prevChats, setprevChats] = useState([]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(questions);
    setMessage(data?.message.content);
  };

  useEffect(() => {
    if (message && questions) {
      // console.log("the answer is changing");
      setprevChats((prevChats) => [
        ...prevChats,
        {
          Query: questions,

          Response: message,
        },
      ]);
    }
  }, [message]);

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <div> Sumit GPT</div>

          {/* <HamBurger prevChats={prevChats} /> */}
        </div>
        <div className="chat-box">
          {prevChats.map((item, index) => (
            <div className="chat-messages" key={index}>
              <div className="chat-message ">
                <div className="user-message chat-bubble d-flex ">
                  <p>
                    {" "}
                    <BiSolidUserCircle />
                    {item?.Query}
                  </p>
                </div>
              </div>
              <div className="chat-message ">
                <div className="assistant-message chat-bubble">
                  <p>
                    <FaRobot />
                    {item?.Response}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {prevChats.length < 1 && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>

        <div className="input-area">
          <Form onSubmit={handleOnSubmit} onReset={() => setQuestions("")}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="text-area"
                placeholder="Enter your Questions"
                name="prompt"
                onChange={(e) => setQuestions(e.target.value)}
                value={questions}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" type="reset" className="m-2">
              Clear
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
