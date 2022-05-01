import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/loading/Loading";

const URL_API = import.meta.env.VITE_GAS_API;
const KmContext = createContext();
export const useKmContext = () => useContext(KmContext);

const KmProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pemakaian, setPemakaian] = useState([]);

  const getApiPemakaian = async (data) => {
    setIsLoading(true);
    try {
      const respon = await axios.get(URL_API, {
        params: data,
      });
      console.log(respon.data);
      setIsLoading(false);
      return respon.data;
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      return err.message;
    }
  };

  const addPemakaian = (data) => {
    data["action"] = "insert";
    data["id"] = uuidv4();
    return getApiPemakaian(data);
  };
  const viewPemakaian = async (data = {}) => {
    data["action"] = "read";
    let result = await getApiPemakaian(data);
    setPemakaian(result.data);
  };
  const deletePemakaian = () => {};
  const updatePemakaian = () => {};
  //

  useEffect(() => {
    // viewPemakaian();
  }, []);
  //
  return (
    <KmContext.Provider value={{ addPemakaian, viewPemakaian, pemakaian }}>
      <>
        {children}
        <Loading show={isLoading} />
      </>
    </KmContext.Provider>
  );
};

export default KmProvider;
