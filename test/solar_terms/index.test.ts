import {
  getSolarTermDate,
  getSolarTerms,
  getSolarTermsInRange,
} from '../../src';
import {
  type SolarTermKey,
} from '../../src/solar_terms/constants';

describe('Solar Terms (Vietnamese)', () => {
  describe('getSolarTermDate', () => {
    const testCases = [
      {
        year: 2026,
        month: 1,
        term: 'lesser_cold' as SolarTermKey,
        expected: '2026-01-05',
        desc: 'Tiểu hàn 2026',
      },
      {
        year: 2026,
        month: 2,
        term: 'rain_water' as SolarTermKey,
        expected: '2026-02-18',
        desc: 'Vũ thủy 2026',
      },
    ];

    test.each(testCases)(
      'Nên tính toán ngày tiết khí $year-$month của $term ($desc) là $expected',
      ({ year, month, term, expected }) => {
        expect(getSolarTermDate(year, month, term)).toBe(expected);
      }
    );
  });

  describe('getSolarTerms', () => {
    test('Nên trả về tên tiết khí bằng tiếng Việt', () => {
      const terms = getSolarTerms('2026-01-01', '2026-01-31');
      expect(terms[0].name).toBe('Tiểu hàn');
      expect(terms[1].name).toBe('Đại hàn');
    });
  });

  describe('getSolarTermsInRange', () => {
    test('Nên bao gồm tất cả 24 tiết khí trong một năm', () => {
      const allTermsFor2026 = getSolarTermsInRange('2026-01-01', '2026-12-31');
      const uniqueTerms = new Set(allTermsFor2026.map(t => t.term));
      expect(uniqueTerms.size).toBe(24);
    });
  });
});
