import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold: number = 0.15) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: "20px 0px -20px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return { ref, isVisible };
};