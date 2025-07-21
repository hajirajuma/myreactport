import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import Test from "./pages/Test";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
