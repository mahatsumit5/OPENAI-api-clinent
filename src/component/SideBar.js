import Button from "react-bootstrap/Button";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Navbar } from "react-bootstrap";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../canvasSlice";
export const SideBar = ({ prevChats }) => {
  const { show } = useSelector((state) => state.canvas);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setShow(false));

  return (
    <div className="side-bar shadow rounded m-2 p-3 text-light ">
      <Navbar expand="lg">
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          backdrop={false}
          scroll={false}
          placement="start"
          expand="lg"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};
