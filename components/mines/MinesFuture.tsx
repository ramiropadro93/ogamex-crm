import { getBaseMineProduction } from '@/constants/Mines/GetBaseMineProduction';
import { temperatureByPlanetSlot } from '@/constants/Mines/TemperatureByPlanetSlot';
import {
  calculateCrystalMineCost,
  calculateDeuteriumMineCost,
  calculateMetalMineCost,
} from '@/helpers/calculateMineCost';
import React, { useState } from 'react';

const MinesFuture: React.FC = () => {
  const [position, setPosition] = useState<number>(1);
  const [metalLevel, setMetalLevel] = useState<number>(1);
  const [crystalLevel, setCrystalLevel] = useState<number>(1);
  const [deuteriumLevel, setDeuteriumLevel] = useState<number>(1);
  const result = '';

  function calculate() {
    const temperature = temperatureByPlanetSlot[position];
    let result = ['Subir minas en el siguiente orden:'];

    let nivelMetal = metalLevel;
    let nivelCristal = crystalLevel;
    let nivelDeuterio = deuteriumLevel;

    for (let i = 0; i < 10; i++) {
      const metalProduction = getBaseMineProduction(
        'metal',
        nivelMetal,
        position,
        1000,
        temperature,
        temperature
      );
      const crystalProduction = getBaseMineProduction(
        'crystal',
        nivelCristal,
        position,
        1000,
        temperature,
        temperature
      );
      const deuteriumProduction = getBaseMineProduction(
        'deuterium',
        nivelDeuterio,
        position,
        1000,
        temperature,
        temperature
      );

      const metalCost = calculateMetalMineCost(nivelMetal);
      const crystalCost = calculateCrystalMineCost(nivelCristal);
      const deuteriumCost = calculateDeuteriumMineCost(nivelDeuterio);

      const metalAmortization =
        (metalCost.metal + metalCost.crystal * 1.5) / metalProduction;

      const crystalAmortization =
        (crystalCost.metal + crystalCost.crystal * 1.5) /
        (crystalProduction * 1.5);

      const deuteriumAmortization =
        (deuteriumCost.metal + deuteriumCost.crystal * 1.5) /
        (deuteriumProduction * 3);

      const minimumAmortization = Math.min(
        metalAmortization,
        crystalAmortization,
        deuteriumAmortization
      );

      if (metalAmortization === minimumAmortization) {
        console.log('nivelMetal: ', nivelMetal);
        result.push('Metal ' + ++nivelMetal);
      }
      if (crystalAmortization === minimumAmortization) {
        result.push('Cristal ' + ++nivelCristal);
      }
      if (deuteriumAmortization === minimumAmortization) {
        result.push('Deuterio ' + ++nivelDeuterio);
      }
    }
    document.getElementById('result')!.innerText = result.join('\n');
    return false;
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
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
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Calcular
        </button>
        <div id="result" className="mt-4 p-4 border rounded bg-gray-0 shadow-lg">
          {result}
        </div>
      </form>
    </div>
  );
};

export default MinesFuture;
