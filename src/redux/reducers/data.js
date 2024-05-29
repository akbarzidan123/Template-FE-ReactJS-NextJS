import { updateObject } from "src/utils/object";

export const initialState = {products: null};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS':
            return updateObject(state, { products: action?.payload});
		case 'GET_PRODUCTS_ID_SUCCESS':
			return updateObject(state, { products: action?.payload});
		case 'GET_SEARCH_PRODUCTS_SUCCESS':
			return updateObject(state, { products: action?.payload});
		case 'GET_PRODUCTS_FAILED':
			return { error: action?.payload?.message || action?.payload };
		case 'GET_PRODUCTS_ID_FAILED':
			return { error: action?.payload?.message || action?.payload };
		case 'GET_SEARCH_PRODUCTS_FAILED':
			return { error: action?.payload?.message || action?.payload };
		default:
			return state;
	}
};

export default reducer;