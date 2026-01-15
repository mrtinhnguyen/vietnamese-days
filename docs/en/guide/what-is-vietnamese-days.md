# What is Vietnamese Days

## Introduction

This project provides a collection of functions for querying Vietnamese holidays, in lieu days, working days, the 24 solar terms, and converting between the lunar and solar calendars. Additionally, it supports subscribing to holiday calendars in `iCal` format, which can be integrated with clients such as Google Calendar, Apple Calendar, and Microsoft Outlook.

Data is automatically fetched daily through `GitHub Actions`. Notifications are sent via email when there are changes to holiday schedules, and information is updated based on official government announcements.

+ **Holidays**: Covers the years from 2004 to 2026.
+ **24 Solar Terms**: Supports dates from 1900 to 2100.
+ **Lunar Calendar**: Supports dates from 1900 to 2100.

The project primarily targets `JS` and `TS` users. Refer to the documentation for usage instructions.

## Non-`JS` Languages

If you are not developing projects in `JS` or `TS`, this project provides a [vietnamese-days.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json) file for Vietnamese holidays. You can use the following CDN link:

```
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json
```

If you need a separate JSON file for a specific year, you can use the following link, which supports years from 2004 onward.

```
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/{year}.json

<!-- 2026 JSON file -->
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.json
```

For example, in `Java`, you can refer to [Warnier-zhang/java-chinese-days](https://github.com/Warnier-zhang/java-chinese-days) as a reference, though it was originally designed for Chinese holidays.

## License Information

Released under the MIT License.