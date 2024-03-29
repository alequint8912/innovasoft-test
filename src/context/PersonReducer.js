export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_CLIENT_SUCCESS":
      return {
        ...state,
        loading: false,
        clients: state?.clients
          ? [...state.clients, action.payload?.newUser]
          : [action.payload?.newUser],
        notification: action?.payload?.notification,
      };
    case "ADD_CLIENT_FAIL":
      return {
        ...state,
        loading: false,
        notification: action?.payload?.notification,
      };
    case "EDIT_CLIENT_SUCCESS":
      return {
        ...state,
        loading: false,
        notification: action?.payload?.notification,
      };
    case "EDIT_CLIENT_FAIL":
      return {
        ...state,
        loading: false,
        notification: action?.payload?.notification,
      };
    case "REMOVE_CLIENT_SUCCESS":
      return {
        ...state,
        loading: false,
        clients: state?.clients.filter(
          (client) => client.id !== action.payload?.clientId
        ),
        notification: action?.payload?.notification,
      };
    case "REMOVE_CLIENT_FAIL":
      return {
        ...state,
        loading: false,
        notification: action?.payload?.notification,
      };

    case "REMOVE_PERSON":
      return {
        ...state,
        clients: state.clients.filter((person) => person.id !== action.payload),
        loading: false,
        notification: {
          type: "success",
          message: "Persona eliminada correctamente",
        },
      };
    case "GET_CLIENTS_SUCCESS":
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case "GET_CLIENTS_FAIL":
      return {
        ...state,
        clients: null,
        loading: false,
        notification: action.payload?.notification,
      };
    case "GET_USER_BY_ID_SUCCESS": {
      return {
        ...state,
        loading: false,
        currentClient: action.payload?.client,
      };
    }
    case "GET_USER_BY_ID_FAIL": {
      return {
        ...state,
        notification: action.payload?.notification,
        loading: false,
      };
    }

    case "GET_INTEREST_SUCCESS": {
      return {
        ...state,
        loading: false,
        interests: action.payload,
      };
    }
    case "GET_INTEREST_FAIL": {
      return {
        ...state,
        loading: false,
        notification: action.payload?.notification,
      };
    }
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
    case "CLEAN_PARTIAL_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
