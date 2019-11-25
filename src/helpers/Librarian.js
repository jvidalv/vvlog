import React from "react";

/**
 * Takes charge of checking if the url we are going to fetch is already stored in the system
 */
 export default class CLibrarian {

    /**
     * Params
     * @property url string
     */
    url;

    /**
     * "Private" property
     */
    response;
    data;
    older;

    /**
     * Expects at least url property set
     * @param _properties
     */
    constructor(url, _properties) {
        this.url = url;
        for (const _property_name in _properties) {
            this[_property_name] = _properties[_property_name];
        }
    }

    /**
     * Endpoint of all methods
     * @returns {CLibrarian}
     */
    resolver() {
        return this;
    }

    /**
     * It exists?
     * @returns {CLibrarian}
     */
     finder() {
        return localStorage.getItem(this.url);
     }

    /**
     * Store it
     * @returns {CLibrarian}
     */
     cacher(data) {
        localStorage.setItem(this.url, data);
        return this.resolver();
    }

    /**
     * Remove it
     * @returns {CLibrarian}
     */
     burner() {
        localStorage.removeItem(this.url);
        return this.resolver();
    }

    /**
     * Checks how old is the data stored
     * @param miliseconds defaults one day
     * @returns {CLibrarian}
     */
     isOlder(miliseconds = 86400000) {
        this.older = this.response && (this.response.date > miliseconds);
        return this.resolver();
    }

}
