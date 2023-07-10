const KEY = "minting";
export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem(KEY);

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(KEY, serializedState);
  } catch (err) {
    console.error(err);
  }
};
