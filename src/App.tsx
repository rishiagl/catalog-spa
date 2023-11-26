import { Route, Routes } from "react-router-dom";
import { GdrivePage } from "./pages/gdrive-page";
import { MainPage } from "./pages/main-page";
import "./App.css";
import { ManagePage } from "./pages/manage-page";


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/manage" element={<ManagePage />} />
      <Route path="/gdrive" element={<GdrivePage />} />
    </Routes>
  );
};