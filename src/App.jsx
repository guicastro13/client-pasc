import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowPrices from "./screens/ShowPrices/index";
import UploadCSV from "./screens/UploadCSV";


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowPrices />} />
            <Route path="/upload" element={<UploadCSV />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
