export const updateObject = (oldObj, newObj, key = '') => {
	if (key) {
		return {
			...oldObj,
			[key]: {
				...oldObj[key],
				newObj,
			},
		};
	}

	return {
		...oldObj,
		...newObj,
	};
};
