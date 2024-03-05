export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loadingPersons: false,
        notification: {
          type: "success",
          message: "Persona agregada correctamente",
        },
      };
    case "EDIT_PERSON":
      return {
        ...state,
        persons: state.persons.map((person) =>
          person._id === action.payload._id ? action.payload : person
        ),
        loadingPersons: false,
        notification: {
          type: "success",
          message: "Persona editada correctamente",
        },
      };
    case "REMOVE_PERSON":
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person._id !== action.payload
        ),
        loadingPersons: false,
        notification: {
          type: "success",
          message: "Persona eliminada correctamente",
        },
      };
    case "GET_PERSONS_SUCCESS":
      return {
        ...state,
        persons: action.payload,
        loadingPersons: false,
      };
    case "PERSONS_LOADING":
      return {
        ...state,
        loadingPersons: true,
      };
    case "CLEAN_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
}
