// SSR Polyfill for localStorage (Node 22+ issues)
// This file is imported at the absolute top of layout.tsx

if (typeof global !== "undefined") {
    const g = global as any;

    // Check if localStorage exists but is broken
    if (g.localStorage && typeof g.localStorage.getItem !== "function") {
        console.log("[ssr-polyfill] Detected broken global.localStorage. Attempting fix...");

        try {
            // Try to redefine it completely
            const mockStorage = {
                getItem: () => null,
                setItem: () => { },
                removeItem: () => { },
                clear: () => { },
                key: () => null,
                length: 0,
            };

            Object.defineProperty(g, 'localStorage', {
                value: mockStorage,
                configurable: true,
                enumerable: true,
                writable: true
            });
            console.log("[ssr-polyfill] Successfully redefined global.localStorage");
        } catch (e) {
            console.warn("[ssr-polyfill] Failed to redefine global.localStorage. Trying to patch existing object...");
            try {
                g.localStorage.getItem = () => null;
                g.localStorage.setItem = () => { };
                g.localStorage.removeItem = () => { };
                g.localStorage.clear = () => { };
                g.localStorage.key = () => null;
                g.localStorage.length = 0;
                console.log("[ssr-polyfill] Successfully patched global.localStorage methods");
            } catch (e2) {
                console.error("[ssr-polyfill] CRITICAL: Could not fix global.localStorage", e2);
            }
        }
    }
}

export { };
