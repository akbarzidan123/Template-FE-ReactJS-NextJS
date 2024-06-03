import { updateObject } from "src/utils/object";

export const initialState = {};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'GET_PRODUCT_CATEGORY_SUCCESS':
			return updateObject(state, { category: action?.payload});
		case 'GET_PRODUCT_CATEGORY_FAILED':
			return { error: action?.payload?.message || action?.payload };
		default:
			return state;
	}
};

export default reducer;