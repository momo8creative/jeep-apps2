import {} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import KmAdd from "./routes/KmAdd";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah-pemakaian-baru" element={<KmAdd />} />
      </Routes>
    </>
  );
};

export default App;
