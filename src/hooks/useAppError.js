import {useGlobals} from "../contexts/Global";

/**
 * Sets app error globally in context
 * @returns {[]}
 */
export const useAppError = (params) => {
    const [{error}, dispatch] = useGlobals();

    dispatch({
        type: "setError",
        setERror: params
    });

    return error;
};

export default useAppError;