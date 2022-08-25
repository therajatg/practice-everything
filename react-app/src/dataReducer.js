const dataReducer = (state, action) => {
  switch (action.type) {
    case "SORT-BY":
      return { ...state, sortBy: action.payload };
    case "SIZE-FILTER":
      return { ...state, sizeFilter: action.payload };
    default:
      return state;
  }
};

function getFilteredData(productList, state) {
  return productList.filter((item) =>
    item.size === state.sizeFilter ? true : false
  );
}
