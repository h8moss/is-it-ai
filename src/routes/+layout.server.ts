import { VERCEL_URL } from '$env/static/private';

export const load = () => {
	return {
		hostname: VERCEL_URL
	};
};
