import {} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import KmAdd from "./routes/KmAdd";
import KmView from "./routes/KmView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pemakaian" element={<KmView />} />
        <Route path="/tambah-pemakaian" element={<KmAdd />} />
      </Routes>
    </>
  );
};

export default App;
