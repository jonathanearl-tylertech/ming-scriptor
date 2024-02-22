import papaparser from 'papaparse';

export function parseCSV(txt: string, config: papaparser.ParseConfig = {}): any[] {
    const parsed = papaparser.parse(txt, config);
    return parsed as any;
}
