const LOAD_PRODUCTS_BY_CATEGORY = "LOAD_PRODUCTS_BY_CATEGORY";
const SORT_PRODUCTS_BY_CATEGORY = "SORT_PRODUCTS_BY_CATEGORY";
const FILTER_PRODUCTS_BY_PRICE_BY_CATEGORY =
  "FILTER_PRODUCTS_BY_PRICE_BY_CATEGORY";
const GET_CHEAP_PRODUCTS_BY_CATEGORY = "GET_CHEAP_PRODUCTS_BY_CATEGORY";

export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});
export const sortProductsByCategoryAction = (payload) => ({
  type: SORT_PRODUCTS_BY_CATEGORY,
  payload,
});
export const filterProductsByCategory = (payload) => ({
  type: FILTER_PRODUCTS_BY_PRICE_BY_CATEGORY,
  payload,
});
export const getCheapProductsByCategory = (payload) => ({
  type: GET_CHEAP_PRODUCTS_BY_CATEGORY,
  payload,
});

const filters = { min: 0, max: Infinity, discont: false };

export const productsByCategoryReducer = (state = {}, action) => {
  if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
    const products = action.payload.data.map((el) => ({
      ...el,
      visible: true,
    }));
    action.payload.data = products;
    return action.payload;
  } else if (action.type === SORT_PRODUCTS_BY_CATEGORY) {
    if (action.payload === "title") {
      state.data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price_asc") {
      state.data.sort((a, b) => a.price - b.price);
    } else if (action.payload === "price_desc") {
      state.data.sort((a, b) => b.price - a.price);
    } else if (action.payload === "default") {
      state.data.sort((a, b) => a.id - b.id);
    }
    return { ...state };
  } else if (action.type === FILTER_PRODUCTS_BY_PRICE_BY_CATEGORY) {
    const { min, max } = action.payload;
    filters.min = min;
    filters.max = max;
    const products = state.data.map((el) => {
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
    state.data = products;
    return { ...state };
  } else if (action.type === GET_CHEAP_PRODUCTS_BY_CATEGORY) {
    filters.discont = action.payload;
    if (action.payload) {
      const products = state.data.map((el) => {
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
      state.data = products;
      return { ...state };
    } else {
      const products = state.data.map((el) => {
        if (el.price >= filters.min && el.price <= filters.max) {
          el.visible = true;
        } else {
          el.visible = false;
        }
        return el;
      });
      state.data = products;
      return { ...state };
    }
  } else {
    return state;
  }
};
