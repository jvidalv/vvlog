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
     * End point of every function in the class is always the resolver
     * @returns {CLibrarian}
     * @param _promise
     */
    async resolver(_promise) {
       this.response = await _promise;
       return this;
    }

    /**
     * It exists?
     * @returns {CLibrarian}
     */
    finder() {
        return this.resolver(localStorage.getItem(this.url));
    }

    /**
     * Store it
     * @returns {CLibrarian}
     */
    cacher() {
        return this.resolver(localStorage.setItem(this.url, this.data));
    }

    /**
     * Remove it
     * @returns {CLibrarian}
     */
    burner() {
        return this.resolver(localStorage.removeItem(this.url));
    }
}

export const Librarian = (url, _properties) => new CLibrarian(url, _properties);
