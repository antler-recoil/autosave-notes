import { useState, useEffect } from "react";

export default function useDebounce (value, delay) {
    const [debounced, setDebounce] = useState(value);

    useEffect (() => {
        const id = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(id);
    }, [value, delay])

    return debounced;
}
