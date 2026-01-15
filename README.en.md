# Vietnamese Days

[![NPM Version](https://img.shields.io/npm/v/vietnamese-days)](https://www.npmjs.com/package/vietnamese-days)
[![GitHub License](https://img.shields.io/github/license/mrtinhnguyen/vietnamese-days)](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/LICENSE)
[![README](https://img.shields.io/badge/README-Tiếng_Việt-brightgreen.svg)](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/README.md)

This project provides a series of functions for querying Vietnamese holidays, in-lieu days, working days, 24 solar terms, and converting between lunar and solar calendars. Provides `JSON` files. Additionally, it supports iCal file subscription for holidays, which can be used by Google Calendar, Apple Calendar, Microsoft Outlook, and other clients.

## Automation

AI-powered automatic holiday data updates have been integrated. When holiday schedules change, it will automatically create a PR and send email notifications for review.

## Documentation

To check out docs, visit [vietnamese-days.tonyx.dev](https://vietnamese-days.tonyx.dev/en/).

The holiday information is updated according to official announcements from the Vietnamese government.

- **Holidays**: Supports the years 2004 to 2026.
- **24 Solar Terms**: Supports the years 1900 to 2100.
- **Lunar Days**: Supports the years 1900 to 2100.

## Subscribe to Calendar

The subscribed calendar includes holidays and in-lieu days for the past three years (2024-2026).

Subscription URL: [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.ics) (Vietnamese)

For English: [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.en.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.en.ics)

If you need an `ics` file for a specific year, you can also reference it through this link: [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.en.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.en.ics), and the Vietnamese version is [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.ics).

## For non-JS projects, you can use the JSON file

A `JSON` file of Vietnamese holidays is provided and can be directly referenced through this link: [vietnamese-days.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json).

If you need a `JSON` file for a specific year, you can also reference it through this link: [years/2026.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.json).

For example, in `Java`, you can refer to [Warnier-zhang/java-chinese-days](https://github.com/Warnier-zhang/java-chinese-days) as a reference, though it was originally designed for Chinese holidays.

## Contributing

1. Fork + Clone the project to your local machine;
2. Holidays: Modify the [holiday definitions](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/src/holidays/generate.ts);
3. Lunar definitions: Modify the [lunar definitions](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/src/solar_lunar/constants.ts);
4. Support for other years or features;
5. Submit a PR.

## Acknowledgements

1. Lunar calendar data is based on the [Bigkoo/Android-PickerView](https://github.com/Bigkoo/Android-PickerView) project.
2. Holiday data generation was inspired by the `Python` version of the [LKI/chinese-calendar](https://github.com/LKI/chinese-calendar) project.
3. Vietnamese localization and holiday data updates by [TonyX.Dev](https://github.com/mrtinhnguyen).
