import { useEffect, useState } from 'react';

export default function useHydrationSafe() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
}