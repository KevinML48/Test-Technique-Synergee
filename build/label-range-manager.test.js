"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const label_range_manager_1 = __importDefault(require("./label-range-manager"));
describe('LabelRangeManager', () => {
    it('should return labels for a given number', () => {
        const ranges = [
            { label: 'A', start: 0, end: 6 },
            { label: 'B', start: 5, end: 7 },
        ];
        const manager = new label_range_manager_1.default(ranges);
        expect(manager.matchingLabels(2)).toEqual(['A']);
        expect(manager.matchingLabels(5)).toEqual(['A', 'B']);
        expect(manager.matchingLabels(6)).toEqual(['A', 'B']);
        expect(manager.matchingLabels(7)).toEqual(['B']);
        expect(manager.matchingLabels(8)).toEqual([]);
    });
});
