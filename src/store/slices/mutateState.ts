export default function mutateState<State>(state: State, newStateData: State) {
  for (const key in newStateData) {
    state[key] = newStateData[key];
  }
}
