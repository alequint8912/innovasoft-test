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

const mockPersons = [
  {
    id: "605c72ef1234567890abcdef",
    nombre: "John",
    apellidos: "Doe",
    identificacion: "JD1234567890",
    celular: "+1234567890",
    otroTelefono: "+1234567890",
    direccion: "123 Main St, Anytown, USA",
    fNacimiento: "1980-01-01",
    fAfiliacion: "2024-03-04",
    sexo: "M",
    resenaPersonal: "A dedicated professional with a passion for technology.",
    imagen: null,
    interesesId: "intereses#1",
  },
  {
    id: "605c72ef1234567890abcde1",
    nombre: "Jane",
    apellidos: "Doe",
    identificacion: "JD1234567891",
    celular: "+1234567891",
    otroTelefono: "+1234567891",
    direccion: "456 Elm St, Anytown, USA",
    fNacimiento: "1985-02-02",
    fAfiliacion: "2024-03-04",
    sexo: "F",
    resenaPersonal: "An innovative thinker with a focus on sustainability.",
    imagen: null,
    interesesId: "intereses#2",
  },
  {
    id: "605c72ef1234567890abcde3",
    nombre: "Alice",
    apellidos: "Smith",
    identificacion: "AS1234567893",
    celular: "+1234567893",
    otroTelefono: "+1234567893",
    direccion: "789 Oak St, Anytown, USA",
    fNacimiento: "1990-03-03",
    fAfiliacion: "2024-03-04",
    sexo: "F",
    resenaPersonal: "A creative artist with a love for painting.",
    imagen: null,
    interesesId: "intereses#3",
  },
  {
    id: "605c72ef1234567890abcde5",
    nombre: "Bob",
    apellidos: "Johnson",
    identificacion: "BJ1234567894",
    celular: "+1234567894",
    otroTelefono: "+1234567894",
    direccion: "321 Pine St, Anytown, USA",
    fNacimiento: "1995-04-04",
    fAfiliacion: "2024-03-04",
    sexo: "M",
    resenaPersonal: "A passionate traveler with a love for exploration.",
    imagen: null,
    interesesId: "intereses#1",
  },
  {
    id: "605c72ef1234567890abcde7",
    nombre: "Charlie",
    apellidos: "Brown",
    identificacion: "CB1234567897",
    celular: "+1234567897",
    otroTelefono: "+1234567897",
    direccion: "654 Maple St, Anytown, USA",
    fNacimiento: "2000-05-05",
    fAfiliacion: "2024-03-04",
    sexo: "M",
    resenaPersonal: "A tech enthusiast with a passion for gadgets.",
    imagen: null,
    interesesId: "intereses#2",
  },
  {
    id: "605c72ef1234567890abcde9",
    nombre: "Diana",
    apellidos: "Jones",
    identificacion: "DJ1234567899",
    celular: "+1234567899",
    otroTelefono: "+1234567899",
    direccion: "987 Birch St, Anytown, USA",
    fNacimiento: "2005-06-06",
    fAfiliacion: "2024-03-04",
    sexo: "F",
    resenaPersonal: "A fitness enthusiast with a love for yoga.",
    imagen: null,
    interesesId: "intereses#3",
  },
  {
    id: "605c72ef1234567890abcde11",
    nombre: "Eve",
    apellidos: "Miller",
    identificacion: "EM12345678911",
    celular: "+12345678911",
    otroTelefono: "+12345678911",
    direccion: "123 Oak St, Anytown, USA",
    fNacimiento: "2010-07-07",
    fAfiliacion: "2024-03-04",
    sexo: "F",
    resenaPersonal: "A passionate gardener with a love for plants.",
    imagen: null,
    interesesId: "intereses#1",
  },
  {
    id: "605c72ef1234567890abcde13",
    nombre: "Frank",
    apellidos: "Davis",
    identificacion: "FD12345678913",
    celular: "+12345678913",
    otroTelefono: "+12345678913",
    direccion: "456 Pine St, Anytown, USA",
    fNacimiento: "2015-08-08",
    fAfiliacion: "2024-03-04",
    sexo: "M",
    resenaPersonal: "A food enthusiast with a love for cooking.",
    imagen: null,
    interesesId: "intereses#2",
  },
  {
    id: "605c72ef1234567890abcde15",
    nombre: "Grace",
    apellidos: "Wilson",
    identificacion: "GW12345678915",
    celular: "+12345678915",
    otroTelefono: "+12345678915",
    direccion: "789 Elm St, Anytown, USA",
    fNacimiento: "2020-09-09",
    fAfiliacion: "2024-03-04",
    sexo: "F",
    resenaPersonal: "A musician with a passion for guitar.",
    imagen: null,
    interesesId: "intereses#3",
  },
  {
    id: "605c72ef1234567890abcde17",
    nombre: "Harry",
    apellidos: "Moore",
    identificacion: "HM12345678917",
    celular: "+12345678917",
    otroTelefono: "+12345678917",
    direccion: "321 Oak St, Anytown, USA",
    fNacimiento: "2025-10-10",
    fAfiliacion: "2024-03-04",
    sexo: "M",
    resenaPersonal: "A tech guru with a passion for programming.",
    imagen: null,
    interesesId: "intereses#1",
  },
];

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
