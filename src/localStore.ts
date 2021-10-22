import { writable } from "svelte/store";
import type { JsonValue } from "./types/json.type";

export const localStore = <T extends JsonValue>(key: string, initial: T) => {
    // start initializing and converting of stuff
    const toString = (value: T) => JSON.stringify(value, null, 2);
    const toObj = JSON.parse;

    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial));
    }

    const saved = toObj(localStorage.getItem(key));
    const { subscribe, set, update } = writable<T>(saved);
    // end initializing...

    // redefine the set() method
    return {
        subscribe,
        set: (value: T) => {
            localStorage.setItem(key, toString(value));
            return set(value);
        },
        update,
    };
};
