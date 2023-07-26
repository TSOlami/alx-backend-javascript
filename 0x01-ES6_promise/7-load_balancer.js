export default function loadBalancer(chinaDownload, USDownload) {
  // Return the value returned by the promise that resolved the first.
  return Promise.race([chinaDownload, USDownload])
	  .then((value) => value);
}
