import LabelRangeManager from '../src/services/label-range-manager';
import { LabelRange } from '../src/models/LabelRange';

describe('LabelRangeManager', () => {
  it('Tests unitaires pour la classe LabelRangeManager', () => {
    const ranges: LabelRange[] = [
      { label: 'A', start: 0, end: 6 },
      { label: 'B', start: 5, end: 7 },
    ];
    const manager = new LabelRangeManager(ranges);

    expect(manager.matchingLabels(2)).toEqual(['A']);
    expect(manager.matchingLabels(5)).toEqual(['A', 'B']);
    expect(manager.matchingLabels(6)).toEqual(['A', 'B']);
    expect(manager.matchingLabels(7)).toEqual(['B']);
    expect(manager.matchingLabels(8)).toEqual([]);
  });
});
