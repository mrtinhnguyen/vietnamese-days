import { getLunarDate } from './src/solar_lunar/index';

const dates = ['2026-02-17', '2026-04-26'];
for (const date of dates) {
    console.log(`--- ${date} ---`);
    const res = getLunarDate(date);
    for (const key in res) {
        console.log(`${key}: ${(res as any)[key]}`);
    }
}
