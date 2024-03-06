export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: true,
        logout: false,
        user: action.payload.user,
        loading: false,
        notification: {
          status: "Success",
          message: "Usuario autenticado exitosamente",
        },
      };
    case "LOGOUT":
      return {
        ...state,
        login: false,
        logout: true,
        user: null,
        notification: {
          status: "Success",
          message: "Ha salido del sistema exitosamente",
        },
      };
    case "REGISTER_USER": {
      return {
        ...state,
        loading: false,
        notification: action.payload,
      };
    }
    case "ENABLE_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SHOW_ERROR": {
      return {
        ...state,
        loading: false,
        notification: action.payload,
      };
    }
    case "CLEAN_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
};
