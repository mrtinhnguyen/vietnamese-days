import {
  getLunarYears,
  getYearLeapMonth,
  getLunarDate,
  getLunarDatesInRange,
  getSolarDateFromLunar,
} from '../../src';

describe('solar_lunar', () => {
  describe('getLunarDate', () => {
    const testCases = [
      {
        solarDate: '2026-02-17', // Mùng 1 Tết Bính Ngọ
        desc: 'Mùng 1 Tết Bính Ngọ 2026',
        expected: {
          date: '2026-02-17',
          lunarYear: 2026,
          lunarMon: 1,
          lunarDay: 1,
          isLeap: false,
          zodiac: 'Ngựa',
          yearCyl: 'Bính Ngọ',
          monCyl: 'Canh Dần',
          dayCyl: 'Nhâm Tuất',
          lunarYearCN: 'Hai Không Hai Sáu',
          lunarMonCN: 'Tháng Giêng',
          lunarDayCN: 'Mùng Một',
        },
      },
      {
        solarDate: '2026-04-26', // Giỗ Tổ Hùng Vương (10/3 Âm lịch)
        desc: 'Giỗ Tổ Hùng Vương 2026',
        expected: {
          date: '2026-04-26',
          lunarYear: 2026,
          lunarMon: 3,
          lunarDay: 10,
          isLeap: false,
          zodiac: 'Ngựa',
          yearCyl: 'Bính Ngọ',
          monCyl: 'Nhâm Thìn',
          dayCyl: 'Canh Ngọ',
          lunarYearCN: 'Hai Không Hai Sáu',
          lunarMonCN: 'Tháng Ba',
          lunarDayCN: 'Mùng Mười',
        },
      },
    ];

    test.each(testCases)(
      'Đối với ngày dương lịch $solarDate ($desc), nên trả về ngày âm lịch đúng',
      ({ solarDate, expected }) => {
        const result = getLunarDate(solarDate);
        expect(result).toEqual(expected);
      }
    );
  });

  test('getLunarYears should return correct Vietnamese text', () => {
    const result = getLunarYears(2026, 2026);
    expect(result).toEqual([
      { lunarYear: 'Bính Ngọ', lunarYearCN: 'Hai Không Hai Sáu', year: 2026 },
    ]);
  });

  describe('getYearLeapMonth', () => {
    test('2023 có tháng nhuận', () => {
      const result = getYearLeapMonth(2023);
      expect(result.leapMonthCN).toBe('Nhuận Hai');
    });
  });
});
