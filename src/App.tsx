import { Route, Routes } from "react-router-dom";
import { GdrivePage } from "./pages/gdrive-page";


export const App = () => {

  return (
    <Routes>
      <Route path="/gdrive" element={<GdrivePage />} />
    </Routes>
  );
};