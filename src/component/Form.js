import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { SearchBar } from "./searchBar.js";
import { Header } from "./Header.js";
import { SideBar } from "./SideBar.js";
import { useSelector } from "react-redux";
export const FormComponent = () => {
  const { chat } = useSelector((state) => state.chatList);
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <SideBar /> */}
        <div className="chat-container shadow rounded m-2 p-3 text-light">
          <div className="chat-box  p-5 w-100">
            {chat?.map((item, index) => (
              <div className="chat-messages" key={index}>
                <div className="chat-message ">
                  <div className="user-message chat-bubble d-flex ">
                    <p>
                      <BiSolidUserCircle />
                      {JSON.stringify(item?.Query)}
                    </p>
                  </div>
                </div>
                <div className="chat-message ">
                  <div className="assistant-message chat-bubble">
                    <p>
                      <FaRobot />
                      {JSON.stringify(item?.Response)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SearchBar />
      </div>
    </>
  );
};
