import Head from 'next/head';
import { useState } from 'react';

const Acs = () => {
  const [numeroJugadores, setNumeroJugadores] = useState<number>(2);
  const [nombresJugadores, setNombresJugadores] = useState<string[]>(['', '']);

  const handleNumeroJugadoresChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(event.target.value, 10);
    setNumeroJugadores(num);
    setNombresJugadores(Array(num).fill(''));
  };

  const handleNombreChange = (index: number, value: string) => {
    const nuevosNombres = [...nombresJugadores];
    nuevosNombres[index] = value;
    setNombresJugadores(nuevosNombres);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Repartidor SAC</h1>

      <div className="mb-4">
        <label className="block mb-2">Número de jugadores:</label>
        <select 
          value={numeroJugadores} 
          onChange={handleNumeroJugadoresChange} 
          className="border p-2 rounded"
        >
          {Array.from({ length: 4 }, (_, i) => i + 2).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-2">
            <label className="block mb-1">Nombre del jugador {index + 1}:</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => handleNombreChange(index, e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Pérdidas</h2>
      <div>
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Tipo</th>
                  <th className="border border-gray-300 p-2">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí irán las filas de pérdidas */}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acs;
