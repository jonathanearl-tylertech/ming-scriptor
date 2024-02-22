import { writable } from 'svelte/store';
import papaparser from 'papaparse';

interface site {
    url: string;
    error: string;
    hasSearchValue: string;
}

export const csvTxt = writable('');
export const csv = writable(null as papaparser.ParseResult<any> | null);
export const sites = writable([] as site[]);
export const config = writable({ selectedRow: 'Unselected' } as { selectedRow: string });