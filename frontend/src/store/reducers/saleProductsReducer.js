const LOAD_SALE_PRODUCTS = "LOAD_SALE_PRODUCTS";
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';

export const loadSaleProductsAction = (payload) => ({
  type: LOAD_SALE_PRODUCTS,
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
  } else if (action.type === SORT_PRODUCTS) {
    if (action.payload === "title") {
      state.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      state.sort((a, b) => a.price - b.price);
    } else if (action.payload === "price_desc") {
      state.sort((a, b) => b.price - a.price);
    } else if (action.payload === "default") {
      state.sort((a, b) => a.id - b.id);
    }

    return [...state];
  } else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
    const { min_value, max_value } = action.payload;
    return state.map((el) => {
      if (el.price >= min_value && el.price <= max_value) {
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
