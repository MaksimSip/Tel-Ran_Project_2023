const LOAD_SALE_PRODUCTS = "LOAD_SALE_PRODUCTS";
const SALE_SORT_PRODUCTS = "SALE_SORT_PRODUCTS";
const SALE_FILTER_PRODUCTS_BY_PRICE = "SALE_FILTER_PRODUCTS_BY_PRICE";

export const loadSaleProductsAction = (payload) => ({
  type: LOAD_SALE_PRODUCTS,
  payload,
});
export const saleSortProductsAction = (payload) => ({
  type: SALE_SORT_PRODUCTS,
  payload,
});
export const saleFilterProductsByPriceAction = (payload) => ({
  type: SALE_FILTER_PRODUCTS_BY_PRICE,
  payload,
});

export const saleProductsReducer = (state = [], action) => {
  if (action.type === LOAD_SALE_PRODUCTS) {
    return action.payload.map((el) => {
      if (el.discont_price != null) {
        el.visible = true;
      } else {
        el.visible = false;
      }
      return el;
    });
  } else if (action.type === SALE_SORT_PRODUCTS) {
    if (action.payload === "title") {
      state.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      state.sort((a, b) => a.discont_price - b.discont_price);
    } else if (action.payload === "price_desc") {
      state.sort((a, b) => b.discont_price - a.discont_price);
    } else if (action.payload === "default") {
      state.sort((a, b) => a.id - b.id);
    }
    return [...state];
  } else if (action.type === SALE_FILTER_PRODUCTS_BY_PRICE) {
    const { min, max } = action.payload;

    return state.map((el) => {
      if (
        el.discont_price != null &&
        el.discont_price >= min &&
        el.discont_price <= max
      ) {
        el.visible = true;
      } else {
        el.visible = false;
      }
      return el;
    });
  } else {
    return state;
  }
};
