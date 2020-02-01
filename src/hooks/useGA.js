import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import ReactGA from "react-ga";

/**
 * Google Analytics
 * Page switcher listener
 * @returns {null}
 * @constructor
 */
export const useGA = () => {
    const history = useHistory();

    useEffect(() => {
        history.listen((location) => {
            ReactGA.set({page: location.pathname});
            ReactGA.pageview(location.pathname)
        });
    }, []);
};

export default useGA