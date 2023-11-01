import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../messageSlice";
import { fetchData } from "../helper/chatbot";
import { CustomSpinner } from "./spinner";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState("");
  const [message, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    setQuestions(e.target.value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const pending = fetchData(questions);
    setLoading(true);
    const data = await pending;
    if (data.role === "assistant") {
      setLoading(false);
      setMessages(data.content);
    }
  };
  useEffect(() => {
    if (questions === "" && message === "") return;
    dispatch(setChat({ Query: questions, Response: message }));
  }, [message, dispatch]);
  return (
    <div className="searchbar p-3 shadow  rounded m-2 ">
      <Form onSubmit={handleOnSubmit}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Send a message"
          variant="dark"
          onChange={handleOnChange}
        />
        <Button
          variant="success"
          type="submit"
          className="submit"
          disabled={loading}
        >
          <BiRightArrow />
        </Button>
      </Form>
      {loading && <CustomSpinner />}
    </div>
  );
};
