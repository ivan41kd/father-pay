export function openModal(id) {
  return {
    type: 'OPEN',
    payload: { activeModalId: id },
  };
}
export function closeModal() {
  return {
    type: 'CLOSE',
    payload: { activeModalId: null },
  };
}
