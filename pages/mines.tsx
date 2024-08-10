import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MinesCalculator from '@/components/mines/MinesCalculator';
import MinesFuture from '@/components/mines/MinesFuture';
import { useState } from 'react';

const Mines = () => {
  const opciones = ['CalculadoraMinas', 'CalculadoraMinasFuturo'];
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
          </div>
          {opcionSeleccionada == opciones[0] && <MinesCalculator />}
          {opcionSeleccionada == opciones[1] && <MinesFuture />}
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Mines;
