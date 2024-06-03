import LINK from 'src/constants/urls';
import { SINGLE_API } from './types';
import { notification } from "antd";
const { AUTH_DUMMY } = LINK;

export const actionGetProductCategoryList = async (payload, next = (f) => f) => {
	let url = AUTH_DUMMY + '/products/category-list';
	return {
		type: SINGLE_API,
		payload: {
			url,
			options: { method: "GET" },
			payload,
			successType: "GET_PRODUCT_CATEGORY_SUCCESS",
			next: async (err, response = {}) => {
				next(err, response);
			},
		},
	};
};