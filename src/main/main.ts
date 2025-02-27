import LabelRangeManager from '../services/label-range-manager';
import { LabelRange } from '../models/LabelRange';

// Définition des plages avec leurs étiquettes
const ranges: LabelRange[] = [
  { label: 'A', start: 0, end: 6 },
  { label: 'B', start: 5, end: 7 },
];

// Création d'un gestionnaire de plages
const manager = new LabelRangeManager(ranges);

console.log(manager.matchingLabels(2)); // ['A']
console.log(manager.matchingLabels(5)); // ['A', 'B']
console.log(manager.matchingLabels(6)); // ['A', 'B']
console.log(manager.matchingLabels(7)); // ['B']
console.log(manager.matchingLabels(8)); // []
