import React, { useState } from 'react';

const MineCalculator: React.FC = () => {
  const [position, setPosition] = useState<number>(1);
  const [metalLevel, setMetalLevel] = useState<number>(1);
  const [crystalLevel, setCrystalLevel] = useState<number>(1);
  const [deuteriumLevel, setDeuteriumLevel] = useState<number>(1);
  const [result, setResult] = useState<string>('');

  const METAL_TYPE = 'metal';
  const CRYSTAL_TYPE = 'crystal';
  const DEUTERIUM_TYPE = 'deuterium';

  const productionMultiplierByMineType = {
    [METAL_TYPE]: 36000,
    [CRYSTAL_TYPE]: 18000,
    [DEUTERIUM_TYPE]: 12000,
  } as any;

  const productionBonusesByPlanetSlot = {
    1: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0.34, [DEUTERIUM_TYPE]: 0 },
    2: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0.32, [DEUTERIUM_TYPE]: 0 },
    3: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0.3, [DEUTERIUM_TYPE]: 0 },
    4: { [METAL_TYPE]: 0.15, [CRYSTAL_TYPE]: 0.15, [DEUTERIUM_TYPE]: 0 },
    5: { [METAL_TYPE]: 0.15, [CRYSTAL_TYPE]: 0.15, [DEUTERIUM_TYPE]: 0 },
    6: { [METAL_TYPE]: 0.15, [CRYSTAL_TYPE]: 0.15, [DEUTERIUM_TYPE]: 0 },
    7: { [METAL_TYPE]: 0.3, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0 },
    8: { [METAL_TYPE]: 0.3, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0 },
    9: { [METAL_TYPE]: 0.3, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0 },
    10: { [METAL_TYPE]: 0.1, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.15 },
    11: { [METAL_TYPE]: 0.1, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.15 },
    12: { [METAL_TYPE]: 0.1, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.15 },
    13: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.2 },
    14: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.2 },
    15: { [METAL_TYPE]: 0, [CRYSTAL_TYPE]: 0, [DEUTERIUM_TYPE]: 0.2 },
  } as any;

  const temperatureByPlanetSlot = {
    1: 85,
    2: 80,
    3: 75,
    4: 70,
    5: 60,
    6: 50,
    7: 40,
    8: 30,
    9: 20,
    10: 10,
    11: 0,
    12: -10,
    13: -20,
    14: -30,
    15: -40,
  } as any;

  const calculate = () => {
    const universeMultiplier = 1; // Define según sea necesario
    const minTemperature = temperatureByPlanetSlot[position] - 40; // Rango estimado
    const maxTemperature = temperatureByPlanetSlot[position];

    const metalProduction = getBaseMineProduction(
      METAL_TYPE,
      metalLevel,
      position,
      universeMultiplier,
      minTemperature,
      maxTemperature
    );
    const crystalProduction = getBaseMineProduction(
      CRYSTAL_TYPE,
      crystalLevel,
      position,
      universeMultiplier,
      minTemperature,
      maxTemperature
    );
    const deuteriumProduction = getBaseMineProduction(
      DEUTERIUM_TYPE,
      deuteriumLevel,
      position,
      universeMultiplier,
      minTemperature,
      maxTemperature
    );

    setResult(`
            Producción de Metal: ${metalProduction} \n
            Producción de Cristal: ${crystalProduction} \n
            Producción de Deuterio: ${deuteriumProduction}
        `);
  };

  const getBaseMineProduction = (
    mineType: string,
    level: number,
    planetSlotNumber: number,
    universeMultiplier: number,
    minimumTemperature: number,
    maximumTemperature: number
  ) => {
    let baseProduction =
      productionMultiplierByMineType[mineType] *
      universeMultiplier *
      level *
      Math.pow(1.1, level) *
      (1 + productionBonusesByPlanetSlot[planetSlotNumber][mineType]);

    const minimumLevelForExtraProductionBoost =
      mineType === DEUTERIUM_TYPE ? 46 : 50;
    if (level > minimumLevelForExtraProductionBoost) {
      baseProduction *= Math.pow(
        1.05,
        level - minimumLevelForExtraProductionBoost
      );
    }
    if (level > 120) {
      baseProduction /= Math.pow(1.05, level - 120);
    }
    if (mineType === DEUTERIUM_TYPE) {
      baseProduction *=
        1.2 - (0.004 * (maximumTemperature + minimumTemperature)) / 2;
    }
    return Math.round(baseProduction);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Calculadora de Minas
        </h2>
        <form
          id="form-calculate"
          onSubmit={(e) => {
            e.preventDefault();
            calculate();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Posición del planeta (del 1 al 15):
            </label>
            <input
              type="number"
              id="position"
              value={position}
              min="1"
              max="15"
              onChange={(e) => setPosition(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Nivel de mina de metal:
            </label>
            <input
              type="number"
              id="metal-level"
              value={metalLevel}
              min="1"
              max="200"
              onChange={(e) => setMetalLevel(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Nivel de mina de cristal:
            </label>
            <input
              type="number"
              id="crystal-level"
              value={crystalLevel}
              min="1"
              max="200"
              onChange={(e) => setCrystalLevel(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Nivel de sintetizador de deuterio:
            </label>
            <input
              type="number"
              id="deuterium-level"
              value={deuteriumLevel}
              min="1"
              max="200"
              onChange={(e) => setDeuteriumLevel(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Calcular
          </button>
        </form>

        <div
          id="div-result"
          className="mt-6 text-center text-lg font-semibold text-gray-800"
        >
          {result && <div>{result}</div>}
        </div>
      </div>
    </div>
  );
};

export default MineCalculator;
