import dayjs from '../../src/utils/dayjs';
import {
  isHoliday,
  isWorkday,
  isInLieu,
  getDayDetail,
  getHolidaysInRange,
  getWorkdaysInRange,
  findWorkday,
} from '../../src';

describe('Holiday Functions (Vietnamese 2026)', () => {
  test('should throw an error for invalid date', () => {
    expect(() => isHoliday('invalid-date')).toThrow(
      'unsupported type string, expected type is Date or Dayjs'
    );
  });

  describe('isHoliday', () => {
    const cases = [
      { date: '2026-01-01', expected: true, desc: 'Tết Dương lịch' },
      { date: '2026-01-05', expected: false, desc: 'Ngày làm việc bình thường' },
      { date: '2026-02-17', expected: true, desc: 'Mùng 1 Tết Nguyên đán' },
      { date: '2026-04-30', expected: true, desc: 'Ngày Giải phóng miền Nam' },
      { date: '2026-05-01', expected: true, desc: 'Ngày Quốc tế Lao động' },
      { date: '2026-09-02', expected: true, desc: 'Ngày Quốc khánh' },
      { date: '2026-11-24', expected: true, desc: 'Ngày Văn hóa Việt Nam' },
      { date: '2026-04-26', expected: true, desc: 'Giỗ Tổ Hùng Vương (Chủ Nhật)' },
      { date: '2026-04-27', expected: true, desc: 'Nghỉ bù Giỗ Tổ Hùng Vương (Thứ Hai)' },
    ];

    test.each(cases)('%desc ($date) should be holiday: %expected', ({ date, expected }) => {
      expect(isHoliday(date)).toBe(expected);
    });
  });

  describe('isWorkday', () => {
    const cases = [
      { date: '2026-01-01', expected: false, desc: 'Tết Dương lịch' },
      { date: '2026-01-05', expected: true, desc: 'Thứ Hai bình thường' },
      { date: '2026-02-17', expected: false, desc: 'Tết Nguyên đán' },
      { date: '2026-02-23', expected: true, desc: 'Thứ Hai sau Tết' },
    ];

    test.each(cases)('%desc ($date) should be workday: %expected', ({ date, expected }) => {
      expect(isWorkday(date)).toBe(expected);
    });
  });

  test('getDayDetail should return correct details', () => {
    const detail = getDayDetail('2026-09-02');
    expect(detail.work).toBe(false);
    expect(detail.name).toContain('Ngày Quốc khánh');
  });

  test('getHolidaysInRange should return correct holidays', () => {
    const start = '2026-04-30';
    const end = '2026-05-03';
    const holidays = getHolidaysInRange(start, end, false);
    expect(holidays).toContain('2026-04-30');
    expect(holidays).toContain('2026-05-01');
  });

  test('findWorkday should find the next working day', () => {
    // Jan 1 to Jan 4 are holidays (Thu to Sun)
    // Jan 5 is Mon (Workday)
    expect(findWorkday(1, '2026-01-01')).toBe('2026-01-05');
  });
});
