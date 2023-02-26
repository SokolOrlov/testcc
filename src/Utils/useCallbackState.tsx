import { useEffect, useRef, useState } from "react";

function useCallbackState<T>(initialValue: T)  {
    const [state, _setState] = useState(initialValue);
    const callbackQueue = useRef([]);
    useEffect(() => {
        callbackQueue.current.forEach((cb) => cb(state));
        callbackQueue.current = [];
    }, [state]);
    const setState = (newValue: any, callback: any) => {
        _setState(newValue);
        if (callback && typeof callback === "function") {
            callbackQueue.current.push(callback);
        }
    };
    return [state, setState];
};
export default useCallbackState;