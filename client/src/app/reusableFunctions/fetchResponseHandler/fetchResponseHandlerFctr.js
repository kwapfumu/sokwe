/** The fetch specification differs from jQuery.ajax() in mainly two ways that
* bear keeping in mind:
* The Promise returned from fetch() won't reject on HTTP error status even if
* the response is an HTTP 404 or 500. Instead, it will resolve normally, and it
* will only reject on network failure or if anything prevented the request
* from completing. By default, fetch won't send or receive any cookies from the
* server, resulting in unauthenticated requests if the site relies on
* maintaining a user session. */
/** To have fetch Promise reject on HTTP error statuses, i.e. on any non-2xx
 * status, define a custom response handler: */
const fetchResponseHandlerFctr = function fetchResponseHandlerFctr() {
  return {
    checkHttpErrorStatus: function checkHttpErrorStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      if (typeof response.statusText === "string") {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    },
  };
};
export default fetchResponseHandlerFctr;
