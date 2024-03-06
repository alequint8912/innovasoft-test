import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";
import { axiosInstance } from "api";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
  isLogin: false,
  isLogout: true,
  notification: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getSession = () => localStorage.getItem("session");

  const setSession = (session) =>
    localStorage.setItem("session", JSON.stringify(session));

  const removeSession = () => localStorage.removeItem("session");

  const login = async ({ username, password }) => {
    dispatch({ type: "ENABLE_LOADING" });
    await axiosInstance
      .post("/Authenticate/login", { username, password })
      .then((response) => {
        const { token, expiration } = response?.data;
        setSession({ token, expiration });
        dispatch({
          type: "LOGIN",
          payload: {
            user: {
              username: response?.data?.username,
              userid: response?.data?.userid,
            },
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SHOW_ERROR",
          payload: {
            status: error?.response?.data?.status,
            message: error?.response?.data?.title,
          },
        });
      });
  };

  const logout = () => {
    removeSession();
    dispatch({
      type: "LOGOUT",
    });
    //window.location.reload();
  };

  const register = async ({ username, password, email }) => {
    dispatch({ type: "ENABLE_LOADING" });
    await axiosInstance
      .post("/Authenticate/register", { username, password, email })
      .then((response) => {
        dispatch({
          type: "REGISTER_USER",
          payload: {
            status: response?.data?.status,
            message: response?.data?.message,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "SHOW_ERROR",
          payload: {
            status: error?.response?.data?.status,
            message: error?.response?.data?.message,
          },
        });
      });
  };

  const cleanNotification = () => {
    dispatch({
      type: "CLEAN_NOTIFICATION",
    });
  };

  const contextValue = {
    user: state.user,
    loading: state.loading,
    notification: state.notification,
    isLogin: state.isLogin,
    isLogout: state.isLogout,
    login,
    logout,
    register,
    getSession,
    cleanNotification,
    removeSession,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
