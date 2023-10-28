import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import { fetchData } from "../axios/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../messageSlice";

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
    setLoading(false);
    if (data.status === "success") {
      setMessages(data?.message.content);
    }
  };
  useEffect(() => {
    if (questions === "" && message === "") return;
    dispatch(setChat({ Query: questions, Response: message }));
  }, [message, dispatch]);
  return (
    <div className="searchbar p-3 shadow rounded m-2 ">
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
    </div>
  );
};
