import axios from "axios";
import { toast } from "react-toastify";
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
    const { data } = await axios.post(url, body, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getKeywords = async () => {
  const options = {
    method: "POST",
    url: "https://keyword-extractor1.p.rapidapi.com/extract_keyphrase",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
      "X-RapidAPI-Host": "keyword-extractor1.p.rapidapi.com",
    },
    data: {
      doc: "Supervised learning is the machine learning task of learning a function that maps an input to an output based on example input-output pairs. It infers a function from labeled training data consisting of a set of training examples. In supervised learning, each example is a pair consisting of an input object (typically a vector) and a desired output value (also called the supervisory signal). A supervised learning algorithm analyzes the training data and produces an inferred function, which can be used for mapping new examples. An optimal scenario will allow for the algorithm to correctly determine the class labels for unseen instances. This requires the learning algorithm to generalize from the training data to unseen situations in a 'reasonable' way (see inductive bias).",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
