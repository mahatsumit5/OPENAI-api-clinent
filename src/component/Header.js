import React from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { setShow } from "../canvasSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const handleShow = () => {
    dispatch(setShow(true));
  };
  const dispatch = useDispatch();
  return (
    <div className="header text-light p-3 shadow   rounded m-2">
      <p className="m-auto fw-bold">CHAT GPT</p>
    </div>
  );
};
