const coalesceToError = (/** @type {any} */ err) => {
	return err instanceof Error || (err && err.name && err.message)
		? err
		: new Error(JSON.stringify(err));
};

export { coalesceToError };
