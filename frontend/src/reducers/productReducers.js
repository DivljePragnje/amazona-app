const {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} = require("../constants/productConstants");

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    default:
      return state;
  }
};
