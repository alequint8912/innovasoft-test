// src/context/GlobalState.js
import { createContext, useReducer } from "react";
import appReducer from "./PersonReducer";
import { axiosInstance } from "api";

const initialState = {
  clients: null,
  currentClient: null,
  interests: null,
  loading: false,
  notification: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getClients = async ({ userid, identificacion, nombre }) => {
    dispatch({
      type: "LOADING",
    });
    await axiosInstance
      .post("/Cliente/Listado", { usuarioId: userid, identificacion, nombre })
      .then((response) => {
        dispatch({
          type: "GET_CLIENTS_SUCCESS",
          payload: response?.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_CLIENTS_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Upss... Tenemos un error.",
            },
          },
        });
      });
  };

  const getClientById = async ({ clientId }) => {
    dispatch({
      type: "LOADING",
    });
    await axiosInstance
      .get(`/Cliente/Obtener/${clientId}`)
      .then((response) =>
        dispatch({
          type: "GET_USER_BY_ID_SUCCESS",
          payload: {
            client: response?.data,
          },
        })
      )
      .catch((error) =>
        dispatch({
          type: "GET_USER_BY_ID_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Upss... Tenemos un error.",
            },
          },
        })
      );
  };

  const getInterests = async () => {
    dispatch({
      type: "LOADING",
    });

    await axiosInstance
      .get("/Intereses/Listado")
      .then((response) =>
        dispatch({
          type: "GET_INTEREST_SUCCESS",
          payload: response?.data,
        })
      )
      .catch((error) =>
        dispatch({
          type: "GET_INTEREST_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Upss... Tenemos un error.",
            },
          },
        })
      );
  };

  const addClient = async ({ userid, client }) => {
    dispatch({
      type: "LOADING",
    });

    await axiosInstance
      .post("/Cliente/Crear", { usuarioId: userid, ...client })
      .then((response) =>
        dispatch({
          type: "ADD_CLIENT_SUCCESS",
          payload: {
            newUser: response?.data,
            notification: {
              status: "Success",
              message: "Cliente agregado correctamente",
            },
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: "ADD_CLIENT_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Hubo un error al agregar este cliente.",
            },
          },
        });
      });
  };

  const editClient = async ({ userid, client }) => {
    dispatch({
      type: "LOADING",
    });

    await axiosInstance
      .post("/Cliente/Actualizar", { usuarioId: userid, ...client })
      .then((response) =>
        dispatch({
          type: "EDIT_CLIENT_SUCCESS",
          payload: {
            notification: {
              client,
              status: "Success",
              message: "Cliente editado correctamente",
            },
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: "EDIT_CLIENT_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Hubo un error al editar este cliente.",
            },
          },
        });
      });
  };

  const removeClient = async ({ userid, clientId }) => {
    dispatch({
      type: "LOADING",
    });

    await axiosInstance
      .delete(`/Cliente/Eliminar/${clientId}`)
      .then((response) =>
        dispatch({
          type: "REMOVE_CLIENT_SUCCESS",
          payload: {
            clientId,
            notification: {
              status: "Success",
              message: "Cliente eliminado correctamente",
            },
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: "REMOVE_CLIENT_FAIL",
          payload: {
            notification: {
              status: "Error",
              message: "Hubo un error al eliminar este cliente.",
            },
          },
        });
      });
  };

  function cleanNotification() {
    dispatch({
      type: "CLEAN_NOTIFICATION",
    });
  }

  const cleanGlobalState = () => {
    dispatch({
      type: "CLEAN_STATE",
    });
  };

  const cleanPartialState = (stateElements) => {
    dispatch({
      type: "CLEAN_PARTIAL_STATE",
      payload: stateElements,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        clients: state.clients,
        currentClient: state.currentClient,
        interests: state.interests,
        loading: state.loading,
        notification: state.notification,
        addClient,
        editClient,
        removeClient,
        getClients,
        getInterests,
        getClientById,
        cleanNotification,
        cleanGlobalState,
        cleanPartialState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
