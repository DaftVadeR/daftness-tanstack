import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

export function useResizePause(
    targetRef: React.RefObject<HTMLElement | null>,
    pauseMs = 400
) {
    const [isResizing, setIsResizing] = useState(false);

    // Debounced "resize end" handler
    const onResizeEnd = useMemo(
        () =>
            debounce(() => {
                setIsResizing(false);
            }, pauseMs),
        [pauseMs]
    );

    useEffect(() => {
        const el = targetRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            // fire immediately on any resize
            setIsResizing(true);

            // debounce end-of-resize
            onResizeEnd();
        });

        observer.observe(el);

        return () => {
            observer.disconnect();
            onResizeEnd.cancel(); // important cleanup
        };
    }, [targetRef, onResizeEnd]);

    return isResizing;
}
