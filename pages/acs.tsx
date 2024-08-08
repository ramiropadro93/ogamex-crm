import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Acs = () => {
  const [numeroJugadores, setNumeroJugadores] = useState<number>(2);
  const [nombresJugadores, setNombresJugadores] = useState<string[]>(['', '']);
  const [cantidad, setCantidad] = useState<{ [key: string]: number[] }>({});
  const [shipsCosts, setShipsCosts] = useState<any[]>([]);

  useEffect(() => {
    const loadShipsCosts = async () => {
      const costs = await import('../data/shipsCosts.json');
      setShipsCosts(costs.default);
      setCantidad(
        costs.default.reduce((acc: any, ship: any) => {
          acc[ship.tipo] = Array(numeroJugadores).fill(0);
          return acc;
        }, {} as { [key: string]: number[] })
      );
    };
    loadShipsCosts();
  }, [numeroJugadores]);

  const handleNumeroJugadoresChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const num = parseInt(event.target.value, 10);
    setNumeroJugadores(num);
    setNombresJugadores(Array(num).fill(''));
    setCantidad(
      shipsCosts.reduce((acc, ship) => {
        acc[ship.tipo] = Array(num).fill(0);
        return acc;
      }, {} as { [key: string]: number[] })
    );
  };

  const handleNombreChange = (index: number, value: string) => {
    const nuevosNombres = [...nombresJugadores];
    nuevosNombres[index] = value;
    setNombresJugadores(nuevosNombres);
  };

  const handleCantidadChange = (ship: string, index: number, value: string) => {
    const nuevasCantidades = { ...cantidad };
    const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
    nuevasCantidades[ship][index] = numericValue;
    setCantidad(nuevasCantidades);
  };

  const calcularCosto = (ship: any, index: number) => {
    return {
      metal: ship.metal * cantidad[ship.tipo][index],
      cristal: ship.cristal * cantidad[ship.tipo][index],
      deuterio: ship.deuterio * cantidad[ship.tipo][index],
    };
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
          {Array.from({ length: 4 }, (_, i) => i + 2).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-2">
            <label className="block mb-1">
              Nombre del jugador {index + 1}:
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => handleNombreChange(index, e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Pérdidas</h2>
      <div>
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 w-1/6">Tipo</th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Cantidad
                    </th>
                    <th className="border border-gray-300 p-2 w-1/6">Metal</th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Cristal
                    </th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Deuterio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipsCosts.map((ship) => (
                    <tr key={ship.tipo}>
                      <td className="border border-gray-300 p-2">
                        {ship.tipo}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          min={0}
                          value={cantidad[ship.tipo][index]}
                          onChange={(e) =>
                            handleCantidadChange(
                              ship.tipo,
                              index,
                              e.target.value
                            )
                          }
                          className="border p-2 rounded w-full"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).metal.toLocaleString()}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).cristal.toLocaleString()}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).deuterio.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acs;
