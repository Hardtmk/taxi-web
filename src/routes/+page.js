// @ts-nocheck
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;
/** @type {import('./$types').PageLoad} */
export const load = async () => {
	try {
		const response = await fetch(
			'https://87qimw7qv5.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/groups',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).then((x) => x.json());

		return { response };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
