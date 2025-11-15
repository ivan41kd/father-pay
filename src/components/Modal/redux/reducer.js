const initialState = {
  activeModalId: null,
};

export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        activeModalId: action.payload.activeModalId,
      };
    case 'CLOSE':
      return {
        ...state,
        activeModalId: null,
      };
    default:
      return state;
  }
}
