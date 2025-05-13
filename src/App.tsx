import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import IntroductionPage from "./pages/introductionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="/loginPage" element={<LoginPage />} />
    </Routes>
  );
}

export default App;