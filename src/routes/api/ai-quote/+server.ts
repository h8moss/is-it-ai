import { Configuration, OpenAIApi } from 'openai';
import { json } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const GET = async () => {
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'You are Quote-GPT, your job is to create human-sounding, quote-worthy phrases and life lessons. When user says "go", reply with and only with a human-sounding, quote-worthy phrase.'
			},
			{ role: 'user', content: 'go' }
		]
	});
	console.log(response.data.choices[0].message);

	return json({ res: response.data.choices[0].message });
};
