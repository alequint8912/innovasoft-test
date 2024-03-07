export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: true,
        logout: false,

        loading: false,
        notification: {
          status: "Success",
          message: "Usuario autenticado exitosamente",
        },
      };
    case "LOGOUT":
      return {
        ...action?.payload,

        // notification: {
        //   status: "Success",
        //   message: "Ha salido del sistema exitosamente",
        // },
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
    case "SHOW_NOTIFICATION": {
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
