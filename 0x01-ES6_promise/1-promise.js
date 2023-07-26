/* eslint-disable */
export default function getFullResponseFromAPI(success) {
	// Simulating an API call
	return new Promise((resolve, reject) => {
		if (success) {
			resolve ({status : 200, body : 'Success' });
		} else {
			reject (new Error('The fake API is not working currently'));
		}
	});
}