import dayjs from '../utils/dayjs';

export enum Holiday {
  NY = "New Year's Day,Tết Dương lịch",
  S = 'Tet Holiday,Tết Nguyên đán',
  H = 'Hung Kings Festival,Giỗ Tổ Hùng Vương',
  R = 'Reunification Day,Ngày Giải phóng miền Nam',
  L = 'Labour Day,Ngày Quốc tế Lao động',
  I = 'Independence Day,Ngày Quốc khánh',
  V = 'Vietnam Culture Day,Ngày Văn hóa Việt Nam',
}

interface DayDetails {
  year?: number;
  month?: number;
  day?: number;
  holiday?: Holiday;
  dayType?: DayType;
}

enum DayType {
  Workday = 1,
  Holiday = 2,
  InLieu = 3,
}

/** Vietnam Labor Code holiday rules */
const holidayDays: Record<number, Partial<Record<Holiday, number>>> = {
  // Before 2021: Independence Day was 1 day
  2000: {
    [Holiday.NY]: 1,
    [Holiday.S]: 5,
    [Holiday.H]: 1,
    [Holiday.R]: 1,
    [Holiday.L]: 1,
    [Holiday.I]: 1,
  },
  // From 2021: Independence Day is 2 days
  2021: {
    [Holiday.I]: 2,
  },
  // From 2026: Vietnam Culture Day is 1 day
  2026: {
    [Holiday.V]: 1,
  },
};

class Arrangement {
  private dayDetails: DayDetails = {};
  public holidays: Record<string, string> = {};
  public workdays: Record<string, string> = {};
  public inLieuDays: Record<string, string> = {};

  /** year at */
  y(year: number) {
    this.dayDetails.year = year;
    return this;
  }

  /** Get holiday days for a specific year and holiday */
  getHolidayDays(year: number, holiday: Holiday): number {
    let lastDefinedDays = 0;

    for (const [ruleYear, holidays] of Object.entries(holidayDays)) {
      const ruleYearNum = parseInt(ruleYear);
      if (ruleYearNum > year) break;
      if (holidays[holiday] !== undefined) {
        lastDefinedDays = holidays[holiday]!;
      }
    }

    return lastDefinedDays;
  }

  mark(holiday: Holiday) {
    this.dayDetails.holiday = holiday;
    return this;
  }

  save(month: number, day: number, dayType: DayType) {
    if (!this.dayDetails.year) {
      throw new Error('should set year before saving holiday');
    }
    if (!this.dayDetails.holiday) {
      throw new Error('should set holiday before saving holiday');
    }

    this.dayDetails.month = month;
    this.dayDetails.day = day;
    this.dayDetails.dayType = dayType;

    const date = dayjs(`${this.dayDetails.year}-${month}-${day}`).format(
      'YYYY-MM-DD'
    );
    const holidayDaysCount = this.getHolidayDays(
      this.dayDetails.year,
      this.dayDetails.holiday
    );
    const holidayDescription = `${this.dayDetails.holiday},${holidayDaysCount}`;

    if (dayType === DayType.Holiday) {
      this.holidays[date] = holidayDescription;
    } else if (dayType === DayType.Workday) {
      this.workdays[date] = holidayDescription;
    } else if (dayType === DayType.InLieu) {
      this.inLieuDays[date] = holidayDescription;
    }
    return this;
  }

  to(month: number, day: number) {
    if (
      !this.dayDetails.holiday ||
      !this.dayDetails.year ||
      !this.dayDetails.month ||
      !this.dayDetails.day
    ) {
      throw new Error('should set year/month/day before saving holiday range');
    }
    const startDate = dayjs(
      `${this.dayDetails.year}-${this.dayDetails.month}-${this.dayDetails.day}`
    );
    const endDate = dayjs(`${this.dayDetails.year}-${month}-${day}`);
    if (endDate.isBefore(startDate) || endDate.isSame(startDate)) {
      throw new Error('end date should be after start date');
    }

    const holidayDaysCount = this.getHolidayDays(
      this.dayDetails.year,
      this.dayDetails.holiday
    );
    const holidayDescription = `${this.dayDetails.holiday},${holidayDaysCount}`;

    const diffDays = endDate.diff(startDate, 'day');
    for (let i = 1; i <= diffDays; i++) {
      const theDate = startDate.add(i, 'day').format('YYYY-MM-DD');
      if (this.dayDetails.dayType === DayType.Holiday) {
        this.holidays[theDate] = holidayDescription;
      } else if (this.dayDetails.dayType === DayType.Workday) {
        this.workdays[theDate] = holidayDescription;
      } else if (this.dayDetails.dayType === DayType.InLieu) {
        this.inLieuDays[theDate] = holidayDescription;
      }
    }
    return this;
  }

  /** work day */
  w(month: number, day: number) {
    return this.save(month, day, DayType.Workday);
  }
  /** rest */
  r(month: number, day: number) {
    return this.save(month, day, DayType.Holiday);
  }
  /** in-lieu */
  i(month: number, day: number) {
    return this.save(month, day, DayType.InLieu);
  }

  /** Tết Dương lịch */
  ny() {
    return this.mark(Holiday.NY);
  }
  /** Tết Nguyên đán */
  s() {
    return this.mark(Holiday.S);
  }
  /** Giỗ Tổ Hùng Vương */
  h() {
    return this.mark(Holiday.H);
  }
  /** Ngày Giải phóng miền Nam */
  r_() {
    return this.mark(Holiday.R);
  }
  /** Ngày Quốc tế Lao động */
  l() {
    return this.mark(Holiday.L);
  }
  /** Ngày Quốc khánh */
  i_() {
    return this.mark(Holiday.I);
  }
  /** Ngày Văn hóa Việt Nam */
  v() {
    return this.mark(Holiday.V);
  }
}

export default Arrangement;
