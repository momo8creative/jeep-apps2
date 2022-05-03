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
  const [lastPemakaian, setlastPemakaian] = useState();
  const [kmBulan, setKmBulan] = useState({});
  const [lastKm, setLastKm] = useState();

  const getApiPemakaian = async (data) => {
    setIsLoading(true);
    try {
      const respon = await axios.get(URL_API, {
        params: data,
      });
      // console.log(respon.data);
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

  const readPemakaian = async (data = {}) => {
    data["action"] = "read";
    let result = await getApiPemakaian(data);
    setPemakaian(result.data);
  };

  const deletePemakaian = () => {};
  const updatePemakaian = () => {};

  const readLastPemakaian = async (data = {}) => {
    data["action"] = "read-last";
    let result = await getApiPemakaian(data);
    setlastPemakaian(result);
  };

  const readLastKm = async (data = {}) => {
    data["action"] = "read-last-km";
    let result = await getApiPemakaian(data);
    setLastKm(result);
  };

  const readKmBulan = async (data = {}) => {
    data["action"] = "read-km-bulan";
    let result = await getApiPemakaian(data);
    setKmBulan(result);
  };

  //

  useEffect(() => {
    // viewPemakaian();
  }, []);
  //
  return (
    <KmContext.Provider
      value={{
        addPemakaian,
        readPemakaian,
        readLastPemakaian,
        readKmBulan,
        readLastKm,
        kmBulan,
        lastPemakaian,
        lastKm,
        pemakaian,
      }}
    >
      <>
        {children}
        <Loading show={isLoading} />
      </>
    </KmContext.Provider>
  );
};

export default KmProvider;
