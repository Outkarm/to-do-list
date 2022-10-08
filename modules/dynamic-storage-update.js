const localStorageUpdate = (storeArr) => {
  localStorage.setItem("taskStorageArray", JSON.stringify(storeArr));
};

export default localStorageUpdate;
