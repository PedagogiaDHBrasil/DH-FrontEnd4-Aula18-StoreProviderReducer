const CLICK_UPDATE_VALUE = "CLICK_UPDATE_VALUE";

const initialState = {
  newValue: "Atualizado via Redux!",
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
