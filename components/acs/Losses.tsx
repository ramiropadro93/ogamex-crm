import React from 'react';

interface LossesProps {
  nombresJugadores: string[];
  shipsCosts: any[];
  cantidad: { [key: string]: number[] };
  setCantidad: React.Dispatch<
    React.SetStateAction<{ [key: string]: number[] }>
  >;
}

const LossesV2 = ({
  nombresJugadores,
  shipsCosts,
  cantidad,
  setCantidad,
}: LossesProps) => {
  
  const handleCantidadChange = (ship: string, index: number, value: string) => {
    const nuevasCantidades = { ...cantidad };
    const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
    nuevasCantidades[ship][index] = numericValue;
    setCantidad(nuevasCantidades);
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 uppercase mt-10">Naves Perdidas</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Jugador</th>
              {shipsCosts.map((ship) => (
                <th key={ship.tipo} className="border border-gray-300 p-2">
                  {ship.tipo}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nombresJugadores.map((nombre, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{nombre}</td>
                {shipsCosts.map((ship) => (
                  <td key={ship.tipo} className="border border-gray-300 p-2">
                    <input
                      type="number"
                      min={0}
                      value={cantidad[ship.tipo][index] || 0}
                      onChange={(e) =>
                        handleCantidadChange(ship.tipo, index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LossesV2;
