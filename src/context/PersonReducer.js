export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        clients: [...state.clients, action.payload],
        loading: false,
        notification: {
          type: "success",
          message: "Persona agregada correctamente",
        },
      };
    case "EDIT_PERSON":
      return {
        ...state,
        clients: state.clients.map((person) =>
          person._id === action.payload._id ? action.payload : person
        ),
        loading: false,
        notification: {
          type: "success",
          message: "Persona editada correctamente",
        },
      };
    case "REMOVE_PERSON":
      return {
        ...state,
        clients: state.clients.filter(
          (person) => person._id !== action.payload
        ),
        loading: false,
        notification: {
          type: "success",
          message: "Persona eliminada correctamente",
        },
      };
    case "LIST_CLIENTS_SUCCESS":
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case "LIST_CLIENTS_FAIL":
      return {
        ...state,
        clients: null,
        loading: false,
        notification: action.payload?.notification,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
        notification: null,
      };
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        loading: false,
        notification: action.payload,
      };
    case "CLEAN_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    case "CLEAN_STATE":
      return {
        clients: null,
        loading: false,
        notification: null,
      };
    default:
      return state;
  }
}
