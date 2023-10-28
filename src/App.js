import "./App.css";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormComponent } from "./component/Form";
import { HamBurger } from "./component/Hambar";
import { LandingPage } from "./pages/LandingPage";
import { SignIn } from "./pages/signup-signin/SignIn";
import { SignUp } from "./pages/signup-signin/SignUp";
import { useEffect } from "react";
import { getKeywords } from "./axios/axiosHelper";
const App = () => {
  // useEffect(() => {
  //   async function getData() {
  //     const data = await getKeywords();
  //   }
  //   getData();
  // }, []);
  return (
    <div className="">
      <Routes>
        <Route path="/chat" element={<LandingPage />} />
        <Route path="/" element={<FormComponent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default App;
