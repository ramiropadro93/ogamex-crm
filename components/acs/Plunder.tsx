interface PlunderProps {
  nombresJugadores: string[];
  recursosRobados: { [key: string]: number[] };
  setRecursosRobados: React.Dispatch<
    React.SetStateAction<{ [key: string]: number[] }>
  >;
}

const Plunder = ({
  nombresJugadores,
  recursosRobados,
  setRecursosRobados,
}: PlunderProps) => {
  const handleRecursosChange = (
    recurso: string,
    index: number,
    value: string
  ) => {
    const nuevosRecursos = { ...recursosRobados };
    const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
    nuevosRecursos[recurso][index] = numericValue;
    setRecursosRobados(nuevosRecursos);
  };

  const calcularTotalRecursos = (recurso: string) => {
    return nombresJugadores.reduce(
      (total, _, index) => total + (recursosRobados[recurso][index] || 0),
      0
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4 uppercase mt-10">
          Recursos Robados
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 w-1/5">Jugador</th>
                <th className="border border-gray-300 p-2 w-1/4">Metal</th>
                <th className="border border-gray-300 p-2 w-1/4">Cristal</th>
                <th className="border border-gray-300 p-2 w-1/4">Deuterio</th>
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
                      value={recursosRobados.metal[index]}
                      onChange={(e) =>
                        handleRecursosChange('metal', index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      min={0}
                      value={recursosRobados.cristal[index]}
                      onChange={(e) =>
                        handleRecursosChange('cristal', index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      min={0}
                      value={recursosRobados.deuterio[index]}
                      onChange={(e) =>
                        handleRecursosChange('deuterio', index, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 p-2 font-bold">Total</td>
                <td className="border border-gray-300 p-2">
                  {calcularTotalRecursos('metal').toLocaleString()}
                </td>
                <td className="border border-gray-300 p-2">
                  {calcularTotalRecursos('cristal').toLocaleString()}
                </td>
                <td className="border border-gray-300 p-2">
                  {calcularTotalRecursos('deuterio').toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Plunder;
