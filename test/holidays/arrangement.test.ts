import dayjs from '../../src/utils/dayjs';
import Arrangement, { Holiday } from '../../src/holidays/arrangement';

describe('Arrangement class', () => {
  let arrangement: Arrangement;

  beforeEach(() => {
    arrangement = new Arrangement();
  });

  it('should set year correctly', () => {
    arrangement.y(2026);
    expect((arrangement as any).dayDetails.year).toBe(2026);
  });

  it('should mark holiday correctly', () => {
    arrangement.ny();
    expect((arrangement as any).dayDetails.holiday).toBe(Holiday.NY);
  });

  it('should mark national/independence holiday correctly', () => {
    arrangement.i_();
    expect((arrangement as any).dayDetails.holiday).toBe(Holiday.I);
  });

  it('should save holiday correctly', () => {
    arrangement.y(2026).ny().r(1, 1);
    const date = dayjs('2026-01-01').format('YYYY-MM-DD');
    expect(arrangement.holidays[date]).toBe("New Year's Day,Tết Dương lịch,1");
  });

  it('should save workday correctly', () => {
    arrangement.y(2026).s().w(2, 4);
    const date = dayjs('2026-02-04').format('YYYY-MM-DD');
    // For Tet in 2026, we defined it as 5 days in rules.
    expect(arrangement.workdays[date]).toBe('Tet Holiday,Tết Nguyên đán,5');
  });

  it('should save in-lieu day correctly', () => {
    arrangement.y(2026).h().i(4, 27);
    const date = dayjs('2026-04-27').format('YYYY-MM-DD');
    expect(arrangement.inLieuDays[date]).toBe('Hung Kings Festival,Giỗ Tổ Hùng Vương,1');
  });

  it('should save holiday range correctly', () => {
    arrangement.y(2026).l().r(4, 30).to(5, 1);
    const dates = ['2024-04-30', '2024-05-01'].map(date =>
      dayjs(date).format('YYYY-MM-DD')
    );
    // Note: year is 2026 in arrangement but we are checking against dates formatted with year (dayjs uses curr year if not specified but here we specify)
    const d1 = dayjs('2026-04-30').format('YYYY-MM-DD');
    const d2 = dayjs('2026-05-01').format('YYYY-MM-DD');
    
    expect(arrangement.holidays[d1]).toBe('Labour Day,Ngày Quốc tế Lao động,1');
    expect(arrangement.holidays[d2]).toBe('Labour Day,Ngày Quốc tế Lao động,1');
  });

  it('should throw error if year is not set before saving holiday', () => {
    expect(() => arrangement.ny().r(1, 1)).toThrow(
      'should set year before saving holiday'
    );
  });

  it('should throw error if holiday is not set before saving holiday', () => {
    expect(() => arrangement.y(2026).r(1, 1)).toThrow(
      'should set holiday before saving holiday'
    );
  });
});
