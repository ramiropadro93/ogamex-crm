import ProtectedRoute from '@/components/auth/ProtectedRoute';
import EmpireProduction from '@/components/mines/EmpireProduction';
import MinesCalculator from '@/components/mines/MinesCalculator';
import MinesFuture from '@/components/mines/MinesFuture';
import { useState } from 'react';

const Mines = () => {
  const opciones = ['CalculadoraMinas', 'CalculadoraMinasFuturo', 'ProduccionImperial'];
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string>();
  return (
    <>
      <ProtectedRoute>
        <div className="container mx-auto p-4">
          <div className="flex justify-center gap-5">
            <button
              onClick={() => setOpcionSeleccionada(opciones[0])}
              className="p-4 border rounded-lg bg-gray-800 text-white"
            >
              Calculadora de minas
            </button>
            <button
              onClick={() => setOpcionSeleccionada(opciones[1])}
              className="p-4 border rounded-lg bg-gray-800 text-white"
            >
              Calculadora de minas futuro
            </button>
            <button
              onClick={() => setOpcionSeleccionada(opciones[2])}
              className="p-4 border rounded-lg bg-gray-800 text-white"
            >
              Producción imperial
            </button>
          </div>
          {opcionSeleccionada == opciones[0] && <MinesCalculator />}
          {opcionSeleccionada == opciones[1] && <MinesFuture />}
          {opcionSeleccionada == opciones[2] && <EmpireProduction />}
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Mines;
