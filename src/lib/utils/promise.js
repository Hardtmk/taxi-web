import { coalesceToError } from './error';

const tryCatchPromise = (/** @type {Promise<any>} */ promise) => {
	// this parameter must be a promise
	return promise
		.then((data) => [undefined, data])
		.catch((error) => Promise.resolve([coalesceToError(error), undefined]));
};

// @ts-ignore
const tryCatch = async (fn, ...args) => {
	try {
		const result = fn(...args);

		if (result?.then) {
			return tryCatchPromise(result);
		}

		return [undefined, result];
	} catch (error) {
		return [coalesceToError(error), undefined];
	}
};

export { tryCatch, tryCatchPromise };
