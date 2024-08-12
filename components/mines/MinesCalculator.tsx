import { getBaseMineProduction } from '@/constants/Mines/GetBaseMineProduction';
import {
  CalculateCrawlerProduction,
  GetAcademyExtraByLevel,
  GetMinerClassExtra,
  GetRankingExtraByTop,
  GetResearchExtraByLevel,
} from '@/helpers/GetExtrasByLevel';
import { temperatureByPlanetSlot } from '@/constants/Mines/TemperatureByPlanetSlot';
import React, { useState } from 'react';

const MinesFuture: React.FC = () => {
  const [position, setPosition] = useState<number>(1);
  const [metalLevel, setMetalLevel] = useState<number>(1);
  const [crystalLevel, setCrystalLevel] = useState<number>(1);
  const [deuteriumLevel, setDeuteriumLevel] = useState<number>(1);
  const [mineralTechLevel, setMineralTechLevel] = useState<number>(0);
  const [crystallizationTechLevel, setCrystallizationTechLevel] =
    useState<number>(0);
  const [fuelTechLevel, setFuelTechLevel] = useState<number>(0);
  const [numberOfCrawlers, setNumberOfCrawlers] = useState<number>(0);
  const [geologistLevel, setGeologistLevel] = useState<number>(0);
  const [resourceExtractionLevel, setResourceExtractionLevel] =
    useState<number>(0);
  const [classType, setClassType] = useState<string>('Miner');
  const [ranking, setRanking] = useState<number>(0);
  const [resultMetal, setResultMetal] = useState<number>();
  const [resultCrystal, setResultCrystal] = useState<number>();
  const [resultDeuterium, setResultDeuterium] = useState<number>();

  const calculateTotalProduction = (
    metalLevel: number,
    crystalLevel: number,
    deuteriumLevel: number,
    mineralTechLevel: number,
    crystallizationTechLevel: number,
    fuelTechLevel: number,
    numberOfCrawlers: number,
    geologistLevel: number,
    resourceExtractionLevel: number,
    classType: string,
    ranking: number
  ) => {
    let baseProduction = {
      metal: getBaseMineProduction(
        'metal',
        metalLevel,
        position,
        1200,
        temperatureByPlanetSlot[position].min,
        temperatureByPlanetSlot[position].max
      ),
      crystal: getBaseMineProduction(
        'crystal',
        crystalLevel,
        position,
        1200,
        temperatureByPlanetSlot[position].min,
        temperatureByPlanetSlot[position].max
      ),
      deuterium: getBaseMineProduction(
        'deuterium',
        deuteriumLevel,
        position,
        1200,
        temperatureByPlanetSlot[position].min,
        temperatureByPlanetSlot[position].max
      ),
    };

    let researchBonusMetal = GetResearchExtraByLevel(mineralTechLevel);
    let researchBonusCrystal = GetResearchExtraByLevel(
      crystallizationTechLevel
    );
    let researchBonusDeuterium = GetResearchExtraByLevel(fuelTechLevel);

    let crawlerBonus = CalculateCrawlerProduction(numberOfCrawlers);

    let geologistBonus = Math.min(geologistLevel, 20) * 0.05;

    let academyBonus = GetAcademyExtraByLevel(resourceExtractionLevel);

    let rankingBonus = GetRankingExtraByTop(ranking);

    let totalProduction = {
      metal:
        baseProduction.metal +
        baseProduction.metal * researchBonusMetal +
        baseProduction.metal * geologistBonus +
        baseProduction.metal * academyBonus +
        baseProduction.metal * crawlerBonus +
        baseProduction.metal * rankingBonus,
      crystal:
        baseProduction.crystal +
        baseProduction.crystal * researchBonusCrystal +
        baseProduction.crystal * geologistBonus +
        baseProduction.crystal * academyBonus +
        baseProduction.crystal * crawlerBonus +
        baseProduction.crystal * rankingBonus,
      deuterium:
        baseProduction.deuterium +
        baseProduction.deuterium * researchBonusDeuterium +
        baseProduction.deuterium * geologistBonus +
        baseProduction.deuterium * academyBonus +
        baseProduction.deuterium * crawlerBonus +
        baseProduction.deuterium * rankingBonus,
    };

    const partial = totalProduction;

    if (classType === 'Miner') {
      totalProduction.metal += GetMinerClassExtra(totalProduction.metal);
      totalProduction.crystal += GetMinerClassExtra(totalProduction.crystal);
      totalProduction.deuterium += GetMinerClassExtra(
        totalProduction.deuterium
      );
    }

    setResultMetal(totalProduction.metal);
    setResultCrystal(totalProduction.crystal);
    setResultDeuterium(totalProduction.deuterium);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          calculateTotalProduction(
            metalLevel,
            crystalLevel,
            deuteriumLevel,
            mineralTechLevel,
            crystallizationTechLevel,
            fuelTechLevel,
            numberOfCrawlers,
            geologistLevel,
            resourceExtractionLevel,
            classType,
            ranking
          );
        }}
      >
        <label className="block">
          Posición del planeta (del 1 al 15):
          <input
            type="number"
            value={position}
            min="1"
            max="15"
            onChange={(e) => setPosition(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de mina de metal:
          <input
            type="number"
            value={metalLevel}
            min="1"
            max="200"
            onChange={(e) => setMetalLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de mina de cristal:
          <input
            type="number"
            value={crystalLevel}
            min="1"
            max="200"
            onChange={(e) => setCrystalLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de sintetizador de deuterio:
          <input
            type="number"
            value={deuteriumLevel}
            min="1"
            max="200"
            onChange={(e) => setDeuteriumLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de Tecnología Mineral:
          <input
            type="number"
            value={mineralTechLevel}
            min="0"
            onChange={(e) => setMineralTechLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de Tecnología de Cristalización:
          <input
            type="number"
            value={crystallizationTechLevel}
            min="0"
            onChange={(e) =>
              setCrystallizationTechLevel(Number(e.target.value))
            }
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de Tecnología de Combustible:
          <input
            type="number"
            value={fuelTechLevel}
            min="0"
            onChange={(e) => setFuelTechLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Cantidad de taladros
          <input
            type="number"
            value={numberOfCrawlers}
            min="0"
            onChange={(e) => setNumberOfCrawlers(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de Geólogo
          <input
            type="number"
            value={geologistLevel}
            min="0"
            max="20"
            onChange={(e) => setGeologistLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Nivel de academia de extracción de recursos
          <input
            type="number"
            value={resourceExtractionLevel}
            min="0"
            onChange={(e) => setResourceExtractionLevel(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          Clase
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
          >
            <option value="Miner">Minero</option>
            <option value="Commander">Comandante</option>
            <option value="Discoverer">Explorador</option>
          </select>
        </label>
        <label className="block">
          Ranking
          <input
            type="number"
            value={ranking}
            min="0"
            onChange={(e) => setRanking(Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Calcular
        </button>
        <div
          id="result"
          className="mt-4 p-4 border rounded bg-gray-0 shadow-lg"
        >
          Producción de metal:{' '}
          {Math.floor(resultMetal ?? 0).toLocaleString('es-ES')} <br />
          Producción de cristal:{' '}
          {Math.floor(resultCrystal ?? 0).toLocaleString('es-ES')} {'\n'} <br />
          Producción de deuterio:{' '}
          {Math.floor(resultDeuterium ?? 0).toLocaleString('es-ES')}
        </div>
      </form>
    </div>
  );
};

export default MinesFuture;
