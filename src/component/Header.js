import React from "react";
import { SideBar } from "./SideBar";
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
      <div>
        <Button variant="" className="me-2 d-lg-none" onClick={handleShow}>
          <BsLayoutSidebarInset />
        </Button>
      </div>

      <p className="m-auto">CHAT GPT</p>
    </div>
  );
};
