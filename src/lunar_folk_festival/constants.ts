import { getLunarDate, monthDays } from '../solar_lunar';
import { getSolarTermsInRange } from '../solar_terms';
import { type Dayjs } from '../utils/dayjs';

// 特殊节日处理器类型
export interface LunarFestival {
  date: string; // 节日日期（公历）
  name: string; // 节日名称
  type: 'lunar' | 'solar_term' | 'special';
}

// 固定农历节日配置
export const LUNAR_FESTIVAL_MAP: Record<number, Record<number, string[]>> = {
  1: {
    // Tháng Giêng
    1: ['Tết Nguyên đán'],
    2: ['Tết Nguyên đán (Mùng 2)'],
    3: ['Tết Nguyên đán (Mùng 3)'],
    4: ['Hóa vàng'],
    15: ['Tết Nguyên tiêu (Rằm tháng Giêng)'],
  },
  2: {
    // Tháng Hai
  },
  3: {
    // Tháng Ba
    3: ['Tết Hàn thực'],
    10: ['Giỗ Tổ Hùng Vương'],
  },
  4: {
    // Tháng Tư
    8: ['Lễ Phật đản'],
  },
  5: {
    // Tháng Năm
    5: ['Tết Đoan ngọ'],
  },
  6: {
    // Tháng Sáu
  },
  7: {
    // Tháng Bảy
    15: ['Lễ Vu Lan', 'Rằm tháng Bảy', 'Xá tội vong nhân'],
  },
  8: {
    // Tháng Tám
    15: ['Tết Trung thu'],
  },
  9: {
    // Tháng Chín
    9: ['Tết Trùng cửu'],
  },
  10: {
    // Tháng Mười
    10: ['Tết Thường tân (Tết Cơm mới)'],
  },
  12: {
    // Tháng Chạp
    23: ['Tết Táo quân (Ông Công Ông Táo)'],
  },
};

// 特殊节日处理器
export const SPECIAL_FESTIVAL_HANDLERS: ((
  date: Dayjs,
  result: LunarFestival[]
) => void)[] = [
  // 处理寒食节（Thanh minh trước 1 ngày - Thường trùng 3/3 nên đã có ở trên, nhưng giữ logic nếu cần）
  (current, result) => {
    const pureBrightnessDay = current.add(1, 'day');
    const pureBrightness = getSolarTermsInRange(pureBrightnessDay).find(
      t => t.term === 'pure_brightness'
    );
    if (pureBrightness) {
      result.push({
        date: current.format('YYYY-MM-DD'),
        name: 'Trước Thanh minh',
        type: 'solar_term',
      });
    }
  },

  // 处理除夕 (Trừ tịch - Ngày cuối năm)
  (current, result) => {
    const lunar = getLunarDate(current);
    if (
      lunar.lunarMon === 12 &&
      lunar.lunarDay === monthDays(lunar.lunarYear, 12)
    ) {
      const date = current.format('YYYY-MM-DD');
      ['Trừ tịch', 'Đêm Giao thừa'].forEach(name => {
        result.push({
          date,
          name,
          type: 'lunar',
        });
      });
    }
  },
];
