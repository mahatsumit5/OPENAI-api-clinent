import axios from "axios";
const api = "https://openai-chatbot-clq5.onrender.com/completions";
const url = "http://localhost:8000/completions";

export const fetchData = async (questions) => {
  try {
    const body = JSON.stringify({
      prompt: questions,
    });
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(api, body, options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
