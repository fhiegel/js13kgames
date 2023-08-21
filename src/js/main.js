function drawGame(state) {
  const gamebox = document.querySelector('#game');
  const index = state.index;
  gamebox.innerHTML = `Loop : ${index}`;
}

function updateGame(state) {
  return {
    ...state,
    index: state.index + 1,
  };
}

function gameloop({ state = { index: 0 } }) {
  const updatedState = updateGame(state);
  drawGame(updatedState);
  // eslint-disable-next-line no-undef
  requestAnimationFrame(() => gameloop({ state: updatedState }));
}

export default function main() {
  gameloop({});
}
