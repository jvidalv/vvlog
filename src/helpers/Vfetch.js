import { buildRequest } from './Generics';

/**
 * Custom fetch that is basically sugar syntax of a generic fetch
 * @param call
 * @param params
 * @returns {Promise<Response>}
 */
function vfetch(call, params) {
  const request = buildRequest(call, params);
  return fetch(request.url, request.request);
}

export default vfetch;
