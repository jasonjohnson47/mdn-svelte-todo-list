export function selectOnFocus(node) {
    // make sure node is defined and has a select() method
    if (node && typeof node.select === "function") {
        const onFocus = (event) => node.select();
        node.addEventListener("focus", onFocus);
        return {
            destroy: () => node.removeEventListener("focus", onFocus),
        };
    }
}
