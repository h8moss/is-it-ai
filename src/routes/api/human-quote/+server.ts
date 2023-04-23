import { json } from '@sveltejs/kit';

export const GET = async () => {
	const response = await fetch('https://api.quotable.io/random');
	const resJson = await response.json();

	return json({
		author: resJson.author,
		text: resJson.content,

		myJSON: resJson
	});
};
