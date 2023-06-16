import "./App.css";
import { useState, useEffect } from "react";
import { Search } from "./component/Form";
const App = () => {
  var question = "";
  const callback = (questions) => {
    question = questions;
  };
  const [message, setMessage] = useState("");
  const [prevChats, setprevChats] = useState([]);

  const api = "https://chat-gpt-4svq.onrender.com/";

  const fetchData = async (questions) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          prompt: questions,
        }),
      };
      const response = await fetch(api, options);
      const result = await response.json();
      // console.log(result.data.id);
      setMessage(result.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (message && question) {
      // console.log("the answer is changing");
      setprevChats((prevChats) => [
        ...prevChats,
        {
          Query: question,

          Response: message,
        },
      ]);
      // setCurrentQuestion((currentQuestions) => [...currentQuestions, {}]);
    }
  }, [message, question]);

  return (
    <div className="container d-flex gap-1 ">
      {/* <SideBar prevChats={prevChats} callback={callback} /> */}

      <Search
        fetchData={fetchData}
        message={message}
        callback={callback}
        prevChats={prevChats}
      />
    </div>
  );
};
export default App;
