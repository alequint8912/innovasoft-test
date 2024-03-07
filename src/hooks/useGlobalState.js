import { useContext } from "react";
import { GlobalContext } from "context/GlobalProvider";

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
