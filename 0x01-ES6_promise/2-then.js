/* eslint-disable */
export default function handleResponseFromAPI(promise) {
	// Simulating an API call
	return promise
	  .then(() => ({ status: 200, body: 'success' }))
	  .catch(() => Error())
	  .finally(() => { console.log('Got a response from the API'); });
  }