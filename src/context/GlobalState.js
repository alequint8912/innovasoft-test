// src/context/GlobalState.js
import { createContext, useReducer } from "react";
import appReducer from "./PersonReducer";

const initialState = {
  persons: null,
  loadingPersons: false,
  notification: null,
};

const mockPersons = [
  {
    _id: "605c72ef1234567890abcdef",
    nombre: "John",
    apellidos: "Doe",
    identificacion: "JD1234567890",
    telefonoCelular: "+1234567890",
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
    _id: "605c72ef1234567890abcde1",
    nombre: "Jane",
    apellidos: "Doe",
    identificacion: "JD1234567891",
    telefonoCelular: "+1234567891",
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
    _id: "605c72ef1234567890abcde3",
    nombre: "Alice",
    apellidos: "Smith",
    identificacion: "AS1234567893",
    telefonoCelular: "+1234567893",
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
    _id: "605c72ef1234567890abcde5",
    nombre: "Bob",
    apellidos: "Johnson",
    identificacion: "BJ1234567894",
    telefonoCelular: "+1234567894",
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
    _id: "605c72ef1234567890abcde7",
    nombre: "Charlie",
    apellidos: "Brown",
    identificacion: "CB1234567897",
    telefonoCelular: "+1234567897",
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
    _id: "605c72ef1234567890abcde9",
    nombre: "Diana",
    apellidos: "Jones",
    identificacion: "DJ1234567899",
    telefonoCelular: "+1234567899",
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
    _id: "605c72ef1234567890abcde11",
    nombre: "Eve",
    apellidos: "Miller",
    identificacion: "EM12345678911",
    telefonoCelular: "+12345678911",
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
    _id: "605c72ef1234567890abcde13",
    nombre: "Frank",
    apellidos: "Davis",
    identificacion: "FD12345678913",
    telefonoCelular: "+12345678913",
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
    _id: "605c72ef1234567890abcde15",
    nombre: "Grace",
    apellidos: "Wilson",
    identificacion: "GW12345678915",
    telefonoCelular: "+12345678915",
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
    _id: "605c72ef1234567890abcde17",
    nombre: "Harry",
    apellidos: "Moore",
    identificacion: "HM12345678917",
    telefonoCelular: "+12345678917",
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

  function getPersons() {
    setTimeout(() => {
      dispatch({
        type: "GET_PERSONS_SUCCESS",
        payload: mockPersons,
      });
    }, [3000]);

    dispatch({
      type: "PERSONS_LOADING",
    });
  }

  function addPerson(person) {
    setTimeout(() => {
      dispatch({
        type: "ADD_PERSON",
        payload: person,
      });
    }, [3000]);
    dispatch({
      type: "PERSONS_LOADING",
    });
  }

  function editPerson(person) {
    setTimeout(() => {
      dispatch({
        type: "EDIT_PERSON",
        payload: person,
      });
    }, [3000]);
    dispatch({
      type: "PERSONS_LOADING",
    });
  }

  function removePerson(id) {
    setTimeout(() => {
      dispatch({
        type: "REMOVE_PERSON",
        payload: id,
      });
    }, [3000]);
    dispatch({
      type: "PERSONS_LOADING",
    });
  }

  function cleanNotificacion() {
    dispatch({
      type: "CLEAN_NOTIFICATION",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        persons: state.persons,
        loadingPersons: state.loadingPersons,
        notification: state.notification,
        addPerson,
        editPerson,
        removePerson,
        getPersons,
        cleanNotificacion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
