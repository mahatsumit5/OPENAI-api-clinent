import { BiSolidUserCircle } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { SearchBar } from "./searchBar.js";
import { useSelector } from "react-redux";
import { Header } from "./Header.js";
export const FormComponent = () => {
  const { chat } = useSelector((state) => state.chatList);
  return (
    <div className="container-fluid  m-auto">
      <div className="wrapper ">
        <Header />

        <div className="chat-container shadow rounded m-2 text-light">
          <div className="chat-box  p-4 w-100">
            {chat?.map((item, index) => (
              <div className="chat-messages" key={index}>
                <div className="chat-message ">
                  <div className="user-message mt-2 chat-bubble d-flex flex-wrap ">
                    <p>
                      <BiSolidUserCircle />
                      {JSON.stringify(item?.Query)}
                    </p>
                  </div>
                </div>
                <div className="chat-message ">
                  <div className="assistant-message mt-2 chat-bubble">
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
    </div>
  );
};
