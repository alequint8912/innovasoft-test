export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loadingPersons: false,
      };
    case "EDIT_PERSON":
      return {
        ...state,
        persons: state.persons.map((person) =>
          person._id === action.payload._id ? action.payload : person
        ),
        loadingPersons: false,
      };
    case "REMOVE_PERSON":
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person._id !== action.payload
        ),
        loadingPersons: false,
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
    default:
      return state;
  }
}
