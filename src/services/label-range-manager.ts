import { LabelRange } from '../models/LabelRange';

class LabelRangeManager {
  private ranges: LabelRange[]; // Tableau des plages de nombras avec leur étiquettes

  constructor(ranges: LabelRange[]) {
    this.ranges = ranges; 
     /**
    * Constructeur initialisant les plages.
    * @param ranges Tableau de plages à gérer.
    */
  }

    /**
   * Récupère les étiquettes associées à un nombre donné.
   * @param item Le nombre pour lequel récupérer les étiquettes.
   */

  matchingLabels(item: number): string[] { // Filtre les plages qui incluent le nombre donné et retourne leurs étiquettes.
    return this.ranges
      .filter(range => range.start <= item && item <= range.end)
      .map(range => range.label);
  }
}

export default LabelRangeManager;
