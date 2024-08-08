interface DebrisProps {
  nombresJugadores: string[];
  escombrosReciclados: { [key: string]: number[] };
  setEscombrosReciclados: React.Dispatch<
    React.SetStateAction<{ [key: string]: number[] }>
  >;
}

const Debris = ({
  nombresJugadores,
  escombrosReciclados,
  setEscombrosReciclados,
}: DebrisProps) => {
  const handleEscombrosChange = (
    escombro: string,
    index: number,
    value: string
  ) => {
    const nuevosEscombros = { ...escombrosReciclados };
    const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
    nuevosEscombros[escombro][index] = numericValue;
    setEscombrosReciclados(nuevosEscombros);
  };

  const calcularTotalEscombros = (escombro: string) => {
    return nombresJugadores.reduce(
      (total, _, index) => total + (escombrosReciclados[escombro][index] || 0),
      0
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4 uppercase mt-10">
          Escombros Reciclados
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 w-1/5">Jugador</th>
                <th className="border border-gray-300 p-2 w-1/3">Metal</th>
                <th className="border border-gray-300 p-2 w-1/3">Cristal</th>
              </tr>
            </thead>
            <tbody>
              {nombresJugadores.map((nombre, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{nombre}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      min={0}
                      value={escombrosReciclados.metal[index]}
                      onChange={(e) =>
                        handleEscombrosChange('metal', index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      min={0}
                      value={escombrosReciclados.cristal[index]}
                      onChange={(e) =>
                        handleEscombrosChange('cristal', index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 p-2 font-bold">Total</td>
                <td className="border border-gray-300 p-2">
                  {calcularTotalEscombros('metal').toLocaleString()}
                </td>
                <td className="border border-gray-300 p-2">
                  {calcularTotalEscombros('cristal').toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Debris;
