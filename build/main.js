"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const label_range_manager_1 = __importDefault(require("./label-range-manager"));
// Définition des plages avec leurs étiquettes
const ranges = [
    { label: 'A', start: 0, end: 6 },
    { label: 'B', start: 5, end: 7 },
];
// Création d'un gestionnaire de plages
const manager = new label_range_manager_1.default(ranges);
// Exemples d'utilisation
console.log(manager.matchingLabels(2)); // ['A']
console.log(manager.matchingLabels(5)); // ['A', 'B']
console.log(manager.matchingLabels(6)); // ['A', 'B']
console.log(manager.matchingLabels(7)); // ['B']
console.log(manager.matchingLabels(8)); // []
