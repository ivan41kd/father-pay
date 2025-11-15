export function setLogin(value) {
  return {
    type: 'SET_LOGIN',
    payload: { login: value },
  };
}
export function setAmount(value) {
  return {
    type: 'SET_AMOUNT',
    payload: { amount: value },
  };
}
export function setMethod(commission, index) {
  return {
    type: 'SET_METHOD',
    payload: { commission, methodIndex: index },
  };
}
