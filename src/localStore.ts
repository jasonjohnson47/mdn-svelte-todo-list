import { writable } from 'svelte/store';
import type { JsonValue } from './types/json.type';

export const localStore = (key: string, initial: JsonValue) => {

    // start initializing and converting of stuff
    const toString = (value: JsonValue) => JSON.stringify(value, null, 2);
    const toObj = JSON.parse;

    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial));
    }

    const saved = toObj(localStorage.getItem(key));
    const { subscribe, set, update } = writable(saved);
    // end initializing...

    // redefine the set() method
    return {
        subscribe,
        set: (value: JsonValue) => {
            localStorage.setItem(key, toString(value));
            return set(value);
        },
        update
    };
};