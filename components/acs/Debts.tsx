import React from 'react';

interface DebtsProps {
  recursosRobados: {
    metal: number[];
    cristal: number[];
    deuterio: number[];
  };
  escombrosReciclados: {
    metal: number[];
    cristal: number[];
  };
  rentaJugadores: {
    metal: number[];
    cristal: number[];
    deuterio: number[];
  };
  rentaNetaPromedio: {
    metal: number;
    cristal: number;
    deuterio: number;
  };
}

const Debts: React.FC<DebtsProps> = ({
  recursosRobados,
  escombrosReciclados,
  rentaJugadores,
  rentaNetaPromedio,
}) => {
  const calcularDeuda = (rentaJugador: number, rentaNeta: number) => {
    return rentaJugador - rentaNeta;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Deudas</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 w-1/3">Jugador</th>
              <th className="border border-gray-300 p-2 w-1/3">Metal</th>
              <th className="border border-gray-300 p-2 w-1/3">Cristal</th>
              <th className="border border-gray-300 p-2 w-1/3">Deuterio</th>
            </tr>
          </thead>
          <tbody>
            {rentaJugadores.metal.map((_, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">Jugador {index + 1}</td>
                <td
                  className={`border border-gray-300 p-2 ${
                    calcularDeuda(rentaJugadores.metal[index], rentaNetaPromedio.metal) >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {calcularDeuda(rentaJugadores.metal[index], rentaNetaPromedio.metal).toLocaleString()}
                </td>
                <td
                  className={`border border-gray-300 p-2 ${
                    calcularDeuda(rentaJugadores.cristal[index], rentaNetaPromedio.cristal) >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {calcularDeuda(rentaJugadores.cristal[index], rentaNetaPromedio.cristal).toLocaleString()}
                </td>
                <td
                  className={`border border-gray-300 p-2 ${
                    calcularDeuda(rentaJugadores.deuterio[index], rentaNetaPromedio.deuterio) >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {calcularDeuda(rentaJugadores.deuterio[index], rentaNetaPromedio.deuterio).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Debts;
