"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LabelRangeManager {
    constructor(ranges) {
        this.ranges = ranges;
    }
    /**
     * Récupère les étiquettes associées à un nombre.
     * @param item Le nombre pour lequel récupérer les étiquettes.
     * @returns Un tableau d'étiquettes.
     */
    matchingLabels(item) {
        return this.ranges
            .filter(range => range.start <= item && item <= range.end)
            .map(range => range.label);
    }
}
exports.default = LabelRangeManager;
