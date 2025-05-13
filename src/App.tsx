import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import IntroductionPage from "./pages/introductionPage";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/registerPage" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;