import "./App.css";
import { Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { FormComponent } from "./component/Form";
import { LandingPage } from "./pages/LandingPage";
import { SignIn } from "./pages/signup-signin/SignIn";
import { SignUp } from "./pages/signup-signin/SignUp";

const App = () => {
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
