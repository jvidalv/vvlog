/**
 *  -------------------------------------------------------
 *  CONTAINS ALL KEYS TO THE ENTIRE APP LOCALSTORAGE PLACES
 *  And also indications of what is exactly the data stored in it
 *  -------------------------------------------------------
 */
export const STORAGE_KEYS = {
    /**
     * If the user has agreed with our cookie policie
     * @mustbe BOOL
     * @type {string}
     */
    BASIC_COOKIES: 'basic_cookies',
    /**
     * If the user has subscribed to our newsletter
     * @mustbe BOOL
     * @type {string}
     */
    NEWSLETTER_SUBSCRIBED: 'newsletter_subscribed',
    /**
     * If the user has submited the contact form, it is deleted after checked
     * @mustbe BOOL
     * @type {string}
     */
    CONTACT_FORM_SUBMITED: 'contact_form_submited',
};

export default STORAGE_KEYS;
