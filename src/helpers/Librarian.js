import React from "react";

/**
 * Takes charge of checking if the url we are going to fetch is already stored in the system
 */
class CLibrarian {

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
    async finder() {
        this.response = await localStorage.getItem(this.url).then(res => res ? JSON.parse(res) : null);
        return this.resolver()
    }

    /**
     * Store it
     * @returns {CLibrarian}
     */
    async cacher() {
        await localStorage.setItem(this.url, this.data);
        return this.resolver();
    }

    /**
     * Remove it
     * @returns {CLibrarian}
     */
    async burner() {
        await localStorage.removeItem(this.url);
        return this.resolver();
    }

    /**
     * Checks how old is the data stored
     * @param miliseconds
     * @returns {Promise<CLibrarian>}
     */
    async isOlder(miliseconds = 86400000) {
        this.older = this.response && (this.response.date > miliseconds);
        return this.resolver();
    }

}

export const Librarian = (url, _properties) => new CLibrarian(url, _properties);
