import { ProductionBonusesByPlanetSlot } from './ProductionBonusByPlanetSlot';
import { productionMultiplierByMineType } from './ProductionMultiplierByMineType';

export function getBaseMineProduction(
  mineType: any,
  level: any,
  planetSlotNumber: any,
  universeMultiplier: any,
  minimumTemperature: any,
  maximumTemperature: any
) {
  let baseProduction =
    productionMultiplierByMineType[mineType] *
    universeMultiplier *
    level *
    Math.pow(1.1, level) *
    (1 + ProductionBonusesByPlanetSlot[planetSlotNumber][mineType]);
  const minimumLevelForExtraProductionBoost =
    mineType === 'deuterium' ? 46 : 50;
  if (level > minimumLevelForExtraProductionBoost) {
    baseProduction *= Math.pow(
      1.05,
      level - minimumLevelForExtraProductionBoost
    );
  }
  if (level > 120) {
    baseProduction /= Math.pow(1.05, level - 120);
  }
  if (mineType === 'deuterium') {
    baseProduction *=
      1.2 - (0.004 * (maximumTemperature + minimumTemperature)) / 2;
  }
  return Math.round(baseProduction);
}
