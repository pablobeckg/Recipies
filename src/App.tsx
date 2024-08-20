import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Rezepte from "./pages/Rezepte/Rezepte";
import Ueberuns from "./pages/Uns/Ueberuns";
import { useState } from "react";
import { SearchTermContext } from "./context/SearchTermContext";
import { DarkModeContext } from "./context/DarkModeContext";
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark-mode" : ""}>
        <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
          <BrowserRouter>
            <div className="colored-line"></div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rezepte" element={<Rezepte />} />
              <Route path="/ueberuns" element={<Ueberuns />} />
              <Route path="/rezepte/:id" element={<RecipeDetailPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </SearchTermContext.Provider>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
