import type { LayoutServerLoadEvent } from "./$types";

export function load({ url }: LayoutServerLoadEvent) {
    return {
        selected: url.pathname
    }
}