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

export const saveTosToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tos", serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadLocalStorageTos = () => {
  try {
    const serializedState = localStorage.getItem("tos");

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
export const loadLocalStorageTosForRedux = (): boolean => {
  try {
    const serializedState = localStorage.getItem("tos");

    if (serializedState === null) {
      return false;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return false;
  }
};
