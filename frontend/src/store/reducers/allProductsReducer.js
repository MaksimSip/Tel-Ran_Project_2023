const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE";
const GET_CHEAP_PRODUCTS = "GET_CHEAP_PRODUCTS";

export const loadAllProductsAction = (payload) => ({
  type: LOAD_ALL_PRODUCTS,
  payload,
});
export const sortProductsAction = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});
export const filterProductsByPriceAction = (payload) => ({
  type: FILTER_PRODUCTS_BY_PRICE,
  payload,
});
export const getCheapProductsAction = (payload) => ({
  type: GET_CHEAP_PRODUCTS,
  payload,
});

const filters = { min: 0, max: Infinity, discont: false };

export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map((el) => ({ ...el, visible: true }));
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
    const { min, max } = action.payload;
    filters.min = min;
    filters.max = max;
    return state.map((el) => {
      if (filters.discont) {
        if (
          el.discont_price >= filters.min &&
          el.discont_price <= filters.max
        ) {
          el.visible = true;
        } else {
          el.visible = false;
        }
      } else {
        if (el.price >= min && el.price <= max) {
          el.visible = true;
        } else {
          el.visible = false;
        }
      }
      return el;
    });
  } else if (action.type === GET_CHEAP_PRODUCTS) {
    filters.discont = action.payload;
    if (action.payload) {
      return state.map((el) => {
        if (el.discont_price != null) {
          if (
            el.discont_price >= filters.min &&
            el.discont_price <= filters.max
          ) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        } else {
          el.visible = false;
        }
        return el;
      });
    } else {
      return state.map((el) => {
        if (el.price >= filters.min && el.price <= filters.max) {
          el.visible = true;
        } else {
          el.visible = false;
        }
        return el;
      });
    }
  } else {
    return state;
  }
};
