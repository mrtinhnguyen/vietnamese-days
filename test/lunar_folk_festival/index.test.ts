import { getLunarFestivals } from '../../src';

describe('lunarFestivals (Vietnamese)', () => {
  test('Nên trả về Tết Nguyên đán', () => {
    const result = getLunarFestivals('2026-02-17');
    expect(result).toEqual([
      {
        date: '2026-02-17',
        name: ['Tết Nguyên đán'],
      },
    ]);
  });

  test('Nên xử lý Giao thừa (Trừ tịch)', () => {
    // Năm 2025 âm lịch có 29 ngày tháng Chạp.
    // Ngày 29 tháng Chạp năm Ất Tỵ là 16/02/2026 dương lịch.
    const result = getLunarFestivals('2026-02-16');
    expect(result).toEqual([
      {
        date: '2026-02-16',
        name: ['Trừ tịch', 'Đêm Giao thừa'],
      },
    ]);
  });

  test('Nên trả về Tết Trung thu', () => {
    // Rằm tháng 8 năm 2026 là 25/09/2026 dương lịch.
    const result = getLunarFestivals('2026-09-25');
    expect(result).toEqual([
      {
        date: '2026-09-25',
        name: ['Tết Trung thu'],
      },
    ]);
  });

  test('Nên trả về Giỗ Tổ Hùng Vương', () => {
    // 10/3 âm lịch năm 2026 là 26/04/2026 dương lịch.
    const result = getLunarFestivals('2026-04-26');
    expect(result).toEqual([
      {
        date: '2026-04-26',
        name: ['Giỗ Tổ Hùng Vương'],
      },
    ]);
  });
});
