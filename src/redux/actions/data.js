import LINK from 'src/constants/urls';
import { SINGLE_API } from './types';
import { notification } from "antd";
const { AUTH_DUMMY } = LINK;

export const actionFetchApprovalData = async (payload = {}, next = (f) => f) => {
	let url = AUTH_DUMMY + "/products";
	return {
		type: SINGLE_API,
		payload: {
			url,
			options: { method: "GET" },
			payload,
			successType: "GET_PRODUCTS_SUCCESS",
			next: async (err, response = {}) => {
				next(err, response);
			},
		},
	};
};

export const actionFetchDataById = async ( id, payload = {}, next = (f) => f) => {
	const idStr = String(id);
	let url = AUTH_DUMMY + `/products/${idStr}`;
	return {
		type: SINGLE_API,
		payload: {
			url,
			options: { method: "GET" },
			payload,
			successType: "GET_PRODUCTS_ID_SUCCESS",
			next: async (err, response = {}) => {
				next(err, response);
			},
		},
	};
};

export const actionSearchData = async ( query, payload = {}, next = (f) => f) => {
	const tagStr = query || "";
	let url = AUTH_DUMMY + `/products/search?q=${encodeURIComponent(tagStr)}`;
	return {
		type: SINGLE_API,
		payload: {
			url,
			options: { method: "GET" },
			payload,
			successType: "GET_SEARCH_PRODUCTS_SUCCESS",
			next: async (err, response = {}) => {
				next(err, response);
			},
		},
	};
};