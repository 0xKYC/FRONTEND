const KEY = "minting";
export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem(KEY);

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
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

const localKey = "access-token";
export const loadLocalStorage = () => {
  try {
    const state = localStorage.getItem(localKey);

    if (state === null) {
      return undefined;
    }
    return state;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
