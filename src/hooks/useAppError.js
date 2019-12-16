
import {useGlobals} from "../contexts/Global";
import {useEffect, useState} from "react";
import {multiFilter} from "../helpers/Generics";

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