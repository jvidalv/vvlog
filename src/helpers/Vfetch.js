import {buildRequest} from "./Generics";

/**
 * Custon vfetch that is basically sugar syntax to have a generic fetch that is not a hook and can be used
 * outside of normal flow
 * @param call
 * @param params
 * @returns {Promise<Response>}
 */
function vfetch (call, params) {
    const request = buildRequest(call, params);
    return fetch(request.url, request.request);
}

export default vfetch;