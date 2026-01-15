import Arrangement from './arrangement.ts';

export default () => {
  const arrangement = new Arrangement();

  /**
   * 2026 Vietnamese Holidays
   * 
   * 1. Tết Dương lịch (New Year's Day): 4 days off
   * From Jan 1 (Thu) to Jan 4 (Sun). 
   * 
   * 2. Tết Nguyên đán (Lunar New Year): 9 days off
   * From Feb 14 (Sat) to Feb 22 (Sun). (Feb 17 is the 1st day of Lunar Year)
   * 
   * 3. Giỗ Tổ Hùng Vương (Hung Kings Commemoration): 3 days off
   * From Apr 25 (Sat) to Apr 27 (Mon). (Apr 26 is 10/3 Lunar, Sunday -> In-lieu Monday)
   * 
   * 4. Ngày Giải phóng miền Nam (30/4) & Quốc tế Lao động (1/5): 4 days off
   * From Apr 30 (Thu) to May 3 (Sun).
   * 
   * 5. Ngày Quốc khánh (Independence Day): 5 days off
   * From Aug 29 (Sat) to Sep 2 (Wed). (Official holidays Sep 1 & Sep 2)
   * 
   * 6. Ngày Văn hóa Việt Nam (Vietnam Culture Day - NEW): 1 day off
   * Nov 24 (Tue).
   */
  arrangement.y(2026)
    .ny().r(1, 1).to(1, 4)
    .s().r(2, 14).to(2, 22)
    .h().r(4, 25).to(4, 27)
    .r_().r(4, 30) // Reunification Day
    .l().r(5, 1).to(5, 3)    // Workers' Day and subsequent weekend
    .i_().r(8, 29).to(9, 2)  // Independence Day period
    .v().r(11, 24);         // Vietnam Culture Day

  return {
    holidays: arrangement.holidays,
    workdays: arrangement.workdays,
    inLieuDays: arrangement.inLieuDays,
  };
};
