import {} from "react";
import { Routes, Route } from "react-router-dom";
import KmAdd from "./routes/KmAdd";
import KmView from "./routes/KmView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<KmView />} />
        <Route path="/tambah-pemakaian" element={<KmAdd />} />
      </Routes>
    </>
  );
};

export default App;
