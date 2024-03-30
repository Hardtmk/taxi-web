// @ts-nocheck
import axios from 'axios';

const HTTP_METHODS = {
	HEAD: 'HEAD',
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE'
};
const ACCEPT_HTTP_METHOD = [
	HTTP_METHODS.HEAD,
	HTTP_METHODS.GET,
	HTTP_METHODS.POST,
	HTTP_METHODS.PUT,
	HTTP_METHODS.PATCH,
	HTTP_METHODS.DELETE
];

/**
 *  @param {string} method
 *  @param {string} path
 */
const validateKeyAndPath = (method, path) => {
	if (typeof method !== 'string') {
		throw new TypeError('The method argument must be a string');
	}

	if (!ACCEPT_HTTP_METHOD.includes(method.toUpperCase())) {
		throw new TypeError('The method argument invalid');
	}

	if (typeof path !== 'string') {
		throw new TypeError('The path argument must be a string');
	}
};

const createRequest = async (
	/** @type {string} */ method,
	/** @type {string} */ path,
	/** @type {import("axios").AxiosRequestConfig<any> | undefined} */ options
) => {
	const { body, headers } = options;
	switch (method.toUpperCase()) {
		case HTTP_METHODS.HEAD:
			return await axios.head(path, body, { headers });
		case HTTP_METHODS.GET:
			return await axios.get(path, { headers });
		case HTTP_METHODS.POST:
			return await axios.post(path, body, { headers });
		case HTTP_METHODS.PUT:
			return await axios.put(path, body, { headers });
		case HTTP_METHODS.PATCH:
			return await axios.patch(path, body, { headers });
		case HTTP_METHODS.DELETE:
			return await axios.delete(path, body, { headers });
	}
};

const request = () => {
	return new Proxy(
		{},
		{
			get(target, key) {
				return async function (/** @type {string} */ path, options = {}) {
					const { headers, body, ...extraOpts } = options;
					validateKeyAndPath(key, path);
					const requestOptions = {
						headers: {
							'Content-Type': 'application/json',
							...headers
						},
						body: { ...body },

						...extraOpts
					};

					if (body) {
						requestOptions.body = typeof body !== 'object' ? JSON.stringify(body) : body;
					}
					return await createRequest(key, path, requestOptions);
				};
			}
		}
	);
};

export { request };
